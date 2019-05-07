package se.bjurr.pomdependencyanalyzerweb.work.storage;

import static java.util.Objects.requireNonNull;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;
import java.util.stream.Collectors;
import javax.ws.rs.WebApplicationException;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Artifact;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Dependency;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Group;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Metadata;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Version;

public class PdawData {
  private final Set<Group> groups = new TreeSet<>(PdawData.stringComparator());
  private final Map<String, Set<Artifact>> artifactsPerGroupId = new HashMap<>();
  private final Map<String, Set<Version>> versionsPerGroupArtifactId = new HashMap<>();
  private final Map<String, Set<Dependency>> dependenciesPerGroupArtifactIdAndVersion =
      new HashMap<>();
  private final Map<String, Set<Dependency>> dependentsPerGroupArtifactIdAndVersion =
      new HashMap<>();
  private final Map<String, Set<Metadata>> metadataPerGroupArtifactIdAndVersion = new HashMap<>();
  private final Map<String, Dependency> parsedPerGroupArtifactIdAndVersion = new HashMap<>();
  private int parsed = 0;

  public List<Artifact> getArtifacts(final String groupId) {
    return new ArrayList<Artifact>(artifactsPerGroupId.get(groupId));
  }

  private static Comparator<Object> stringComparator() {
    return (o1, o2) -> o1.toString().compareTo(o2.toString());
  }

  public List<Version> getVersions(final String groupId, final String artifactId) {
    return new ArrayList<Version>(versionsPerGroupArtifactId.get(groupId + " " + artifactId));
  }

  public List<Group> getGroupIds() {
    return new ArrayList<Group>(groups);
  }

  public List<Dependency> getDependencies(
      final String groupId, final String artifactId, final String version) {
    final String key = key(groupId, artifactId, version);
    if (!dependenciesPerGroupArtifactIdAndVersion.containsKey(key)) {
      throw new WebApplicationException(404);
    }
    return new ArrayList<Dependency>(dependenciesPerGroupArtifactIdAndVersion.get(key));
  }

  public List<Dependency> getDependents(
      final String groupId, final String artifactId, final String version) {
    final String key = key(groupId, artifactId, version);
    if (dependentsPerGroupArtifactIdAndVersion.containsKey(key)) {
      return new ArrayList<Dependency>(dependentsPerGroupArtifactIdAndVersion.get(key));
    }
    return new ArrayList<>();
  }

  public List<Metadata> getMetadata(
      final String groupId, final String artifactId, final String version) {
    final String key = key(groupId, artifactId, version);
    if (!metadataPerGroupArtifactIdAndVersion.containsKey(key)) {
      new ArrayList<>();
    }
    return new ArrayList<Metadata>(metadataPerGroupArtifactIdAndVersion.get(key));
  }

  private String key(final String groupId, final String artifactId, final String version) {
    return groupId + " " + artifactId + " " + version;
  }

  public Dependency getParsed(final String groupId, final String artifactId, final String version) {
    final String key = key(groupId, artifactId, version);
    if (!parsedPerGroupArtifactIdAndVersion.containsKey(key)) {
      throw new WebApplicationException(404);
    }
    return parsedPerGroupArtifactIdAndVersion.get(key);
  }

  public void addDependencies(final Dependency dep, final List<Dependency> dependencies) {
    requireNonNull(dep, "dep");
    requireNonNull(dependencies, "dependencies");

    addSearchParts(dep, dependencies);
    getOrCreate(
            dependenciesPerGroupArtifactIdAndVersion,
            dep.getGroupId() + " " + dep.getArtifactId() + " " + dep.getVersion())
        .addAll(dependencies);
  }

  public void addDependents(final Dependency dep, final List<Dependency> dependents) {
    requireNonNull(dep, "dep");
    requireNonNull(dependents, "dependents");
    addSearchParts(dep, dependents);
    getOrCreate(
            dependentsPerGroupArtifactIdAndVersion,
            dep.getGroupId() + " " + dep.getArtifactId() + " " + dep.getVersion())
        .addAll(dependents);
  }

  public void addParsed(final Dependency dep) {
    requireNonNull(dep, "dep");
    parsed++;
    parsedPerGroupArtifactIdAndVersion.put(
        dep.getGroupId() + " " + dep.getArtifactId() + " " + dep.getVersion(), dep);
  }

  public void addMetadata(
      final Dependency dep,
      final List<se.bjurr.pomdependencyanalyzerweb.work.storage.Metadata> metadata) {
    requireNonNull(dep, "dep");
    requireNonNull(metadata, "metadata");
    final List<Metadata> metadataList =
        metadata
            .stream()
            .map(
                (it) -> {
                  final Metadata m = new Metadata();
                  m.setKey(it.getKey());
                  m.setValue(it.getValue());
                  return m;
                })
            .collect(Collectors.toList());
    getOrCreate(
            metadataPerGroupArtifactIdAndVersion,
            dep.getGroupId() + " " + dep.getArtifactId() + " " + dep.getVersion())
        .addAll(metadataList);
  }

  public Map<String, String> getMetadata() {
    final Map<String, String> metadata = new TreeMap<>();
    metadata.put("number_of_artifacts", this.parsed + "");
    metadata.put("last_updated", Instant.now().toString());
    return metadata;
  }

  private void addSearchParts(final Dependency dep, final List<Dependency> also) {
    requireNonNull(dep, "dep");
    requireNonNull(also, "also");
    addSearchPart(dep);

    for (final Dependency d : also) {
      addSearchPart(d);
    }
  }

  private void addSearchPart(final Dependency dep) {
    requireNonNull(dep, "dep");
    groups.add(group(dep.getGroupId()));
    getOrCreate(artifactsPerGroupId, dep.getGroupId()).add(artifact(dep));
    getOrCreate(versionsPerGroupArtifactId, dep.getGroupId() + " " + dep.getArtifactId())
        .add(version(dep));
  }

  private Version version(final Dependency dep) {
    final Version v = new Version();
    v.setArtifactId(dep.getArtifactId());
    v.setGroupId(dep.getGroupId());
    v.setVersion(dep.getVersion());
    return v;
  }

  private Artifact artifact(final Dependency dep) {
    final Artifact a = new Artifact();
    a.setArtifactId(dep.getArtifactId());
    a.setGroupId(dep.getGroupId());
    return a;
  }

  private <T> Set<T> getOrCreate(final Map<String, Set<T>> map, final String k) {
    if (!map.containsKey(k)) {
      map.put(k, new TreeSet(PdawData.stringComparator()));
    }
    return map.get(k);
  }

  private Group group(final String groupId) {
    final Group g = new Group();
    g.setGroupId(groupId);
    return g;
  }

  public String stats() {
    return "Groups: "
        + groups.size()
        + " Artifacts: "
        + versionsPerGroupArtifactId.keySet().size()
        + " Dependencies: "
        + dependenciesPerGroupArtifactIdAndVersion.keySet().size();
  }
}
