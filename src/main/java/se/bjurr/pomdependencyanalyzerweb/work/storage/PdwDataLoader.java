package se.bjurr.pomdependencyanalyzerweb.work.storage;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Dependency;
import se.bjurr.pomdependencyanalyzerweb.impl.PdawApiImpl;

public class PdwDataLoader {

  public static void load(final String fromFolder) {
    final Path fromPath = Paths.get(fromFolder);
    System.out.println("Loading data from: " + fromPath.toFile().getAbsolutePath());
    try {
      final Map<String, Boolean> takenCareOf = new HashMap<>();
      Files.walk(fromPath)
          .filter(
              (it) ->
                  it.toFile().getName().equals("parsed.json")
                      || it.toFile().getName().equals("dependents.json"))
          .forEach(
              (anyFile) -> {
                try {
                  final Path parent = anyFile.getParent();
                  if (takenCareOf.containsKey(parent.toFile().getAbsolutePath())) {
                    return;
                  }
                  takenCareOf.put(parent.toFile().getAbsolutePath(), true);

                  final Path parsedJson = parent.resolve("parsed.json");
                  Dependency parsed = null;
                  if (parsedJson.toFile().exists()) {
                    parsed =
                        new ObjectMapper()
                            .readValue(
                                new String(Files.readAllBytes(parsedJson)), Dependency.class);
                  }

                  final Path metadataJson = parent.resolve("metadata.json");
                  List<Metadata> metadata = new ArrayList<>();
                  if (metadataJson.toFile().exists()) {
                    metadata =
                        new ObjectMapper()
                            .readValue(
                                new String(Files.readAllBytes(metadataJson)),
                                new TypeReference<List<Metadata>>() {});
                  }

                  final Path dependenciesJson = parent.resolve("dependencies.json");
                  List<Dependency> dependencies = null;
                  if (dependenciesJson.toFile().exists()) {
                    dependencies =
                        new ObjectMapper()
                            .readValue(
                                new String(Files.readAllBytes(dependenciesJson)),
                                new TypeReference<List<Dependency>>() {});
                  }

                  final Path dependentsJson = parent.resolve("dependents.json");
                  List<Dependency> dependents = null;
                  if (dependentsJson.toFile().exists()) {
                    dependents =
                        new ObjectMapper()
                            .readValue(
                                new String(Files.readAllBytes(dependentsJson)),
                                new TypeReference<List<Dependency>>() {});
                  }

                  final ParsedArtifact parsedArtifact =
                      new ParsedArtifact(parsed, metadata, dependencies, dependents);
                  saveParsed(parsedArtifact);
                } catch (final Exception e) {
                  throw new RuntimeException(fromPath.toFile().getAbsolutePath(), e);
                }
              });
    } catch (final Exception e) {
      throw new RuntimeException(fromPath.toFile().getAbsolutePath(), e);
    }
  }

  private static void saveParsed(final ParsedArtifact parsedArtifact) {
    if (parsedArtifact.findParsed().isPresent() && parsedArtifact.findDependencies().isPresent()) {
      PdawApiImpl.PDAWDATA.addDependencies(
          parsedArtifact.findParsed().get(), parsedArtifact.findDependencies().get());
    }
    if (parsedArtifact.findParsed().isPresent() && parsedArtifact.findDependents().isPresent()) {
      PdawApiImpl.PDAWDATA.addDependents(
          parsedArtifact.findParsed().get(), parsedArtifact.findDependents().get());
    }
    if (parsedArtifact.findParsed().isPresent()) {
      PdawApiImpl.PDAWDATA.addParsed(parsedArtifact.findParsed().get());
    }
    if (parsedArtifact.findParsed().isPresent()) {
      PdawApiImpl.PDAWDATA.addMetadata(
          parsedArtifact.findParsed().get(), parsedArtifact.getMetadata());
    }
    System.out.println("Dependencies loaded: " + PdawApiImpl.PDAWDATA.stats());
  }
}
