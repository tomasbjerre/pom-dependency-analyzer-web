package se.bjurr.pomdependencyanalyzerweb.work.storage;

import java.util.List;
import java.util.Optional;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Dependency;

public class ParsedArtifact {

  private final Dependency parsed;
  private final List<Metadata> metadata;
  private final List<Dependency> dependencies;
  private final List<Dependency> dependents;

  public ParsedArtifact(
      final Dependency parsed,
      final List<Metadata> metadata,
      final List<Dependency> dependencies,
      final List<Dependency> dependents) {
    this.parsed = parsed;
    this.metadata = metadata;
    this.dependencies = dependencies;
    this.dependents = dependents;
  }

  public Optional<List<Dependency>> findDependencies() {
    return Optional.ofNullable(dependencies);
  }

  public Optional<List<Dependency>> findDependents() {
    return Optional.ofNullable(dependents);
  }

  public List<Metadata> getMetadata() {
    return metadata;
  }

  public Optional<Dependency> findParsed() {
    return Optional.ofNullable(parsed);
  }

  @Override
  public String toString() {
    return "ParsedArtifact [parsed="
        + parsed
        + ", metadata="
        + metadata
        + ", dependencies="
        + dependencies
        + ", dependents="
        + dependents
        + "]";
  }
}
