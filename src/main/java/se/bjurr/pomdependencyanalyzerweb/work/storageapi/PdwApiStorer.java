package se.bjurr.pomdependencyanalyzerweb.work.storageapi;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import java.io.File;
import java.lang.reflect.Method;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.Path;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import org.glassfish.jersey.client.proxy.WebResourceFactory;
import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;
import se.bjurr.pomdependencyanalyzerweb.data.PomAnalyzerArguments;
import se.bjurr.pomdependencyanalyzerweb.gen.api.PdawApi;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Artifact;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Group;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Version;

public class PdwApiStorer {

  public static void store(final String storageFolder) {
    final PdawApi api = createApi();

    final List<Group> groupIds = api.getGroupIds();
    store(groupIds, PomAnalyzerArguments.INSTANCE.getApiFolder() + getPath("getGroupIds"));
    storeGroup(api, groupIds);
    storeMetadata(api);
  }

  private static void storeMetadata(final PdawApi api) {
    final Map<String, String> data = api.getGlobalMetadata();
    store(data, PomAnalyzerArguments.INSTANCE.getApiFolder() + getPath("getGlobalMetadata"));
  }

  private static void storeGroup(final PdawApi api, final List<Group> groupIds) {
    for (final Group group : groupIds) {
      final List<Artifact> artifacts = api.getArtifacts(group.getGroupId());
      store(
          artifacts,
          PomAnalyzerArguments.INSTANCE.getApiFolder()
              + getPath("getArtifacts").replace("{groupId}", group.getGroupId()));
      storeArtifact(api, artifacts);
    }
  }

  private static void storeArtifact(final PdawApi api, final List<Artifact> artifacts) {
    for (final Artifact artifact : artifacts) {
      final List<Version> versions =
          api.getVersions(artifact.getGroupId(), artifact.getArtifactId());
      store(
          versions,
          PomAnalyzerArguments.INSTANCE.getApiFolder()
              + getPath("getVersions")
                  .replace("{groupId}", artifact.getGroupId())
                  .replace("{artifactId}", artifact.getArtifactId()));
      storeVersion(api, versions);
    }
  }

  private static void storeVersion(final PdawApi api, final List<Version> versions) {
    for (final Version version : versions) {
      final String apiFolder = PomAnalyzerArguments.INSTANCE.getApiFolder();

      try {
        store(
            api.getMetadata(version.getGroupId(), version.getArtifactId(), version.getVersion()),
            apiFolder + replace(getPath("getMetadata"), version));
      } catch (final NotFoundException nf) {
        // Ignore
      }
      try {
        store(
            api.getParsed(version.getGroupId(), version.getArtifactId(), version.getVersion()),
            apiFolder + replace(getPath("getParsed"), version));
      } catch (final NotFoundException nf) {
        // Ignore
      }

      try {
        store(
            api.getDependencies(
                version.getGroupId(), version.getArtifactId(), version.getVersion()),
            apiFolder + replace(getPath("getDependencies"), version));
      } catch (final NotFoundException nf) {
        // Ignore
      }

      store(
          api.getDependents(version.getGroupId(), version.getArtifactId(), version.getVersion()),
          apiFolder + replace(getPath("getDependents"), version));
    }
  }

  private static String replace(final String path, final Version version) {
    return path.replace("{groupId}", version.getGroupId())
        .replace("{artifactId}", version.getArtifactId())
        .replace("{version}", version.getVersion());
  }

  private static void store(final Object obj, final String filename) {
    System.out.println("Saving:" + filename);
    final ObjectMapper mapper = new ObjectMapper();
    mapper.enable(SerializationFeature.INDENT_OUTPUT);
    try {
      final File storeInFile = Paths.get(filename).toFile();
      storeInFile.getParentFile().mkdirs();
      mapper.writeValue(storeInFile, obj);
    } catch (final Exception e) {
      throw new RuntimeException(e);
    }
  }

  private static String getPath(final String methodName) {
    final String basePath = PdawApi.class.getAnnotation(Path.class).value();
    final List<String> methods = new ArrayList<>();
    for (final Method method : PdawApi.class.getMethods()) {
      methods.add(method.getName());
      if (method.getName().equals(methodName)) {
        final Path path = method.getAnnotation(Path.class);
        return basePath + path.value();
      }
    }
    throw new RuntimeException("Did not find method: " + methodName + ", found: " + methods);
  }

  private static PdawApi createApi() {
    final ResourceConfig configuration =
        new ResourceConfig()
            .packages("se.bjurr.pomdependencyanalyzerweb")
            .register(JacksonFeature.class);

    final Client client = ClientBuilder.newClient(configuration);
    final WebTarget webTarget =
        client.target("http://localhost:9090/pom-dependency-analyzer-web/api");

    return WebResourceFactory.newResource(PdawApi.class, webTarget);
  }
}
