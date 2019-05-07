package se.bjurr.pomdependencyanalyzerweb.impl;

import java.util.List;
import java.util.Map;
import se.bjurr.pomdependencyanalyzerweb.gen.api.PdawApi;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Artifact;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Dependency;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Group;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Metadata;
import se.bjurr.pomdependencyanalyzerweb.gen.model.Version;
import se.bjurr.pomdependencyanalyzerweb.work.storage.PdawData;

public class PdawApiImpl implements PdawApi {
  public static PdawData PDAWDATA = new PdawData();

  @Override
  public List<Artifact> getArtifacts(final String groupId) {
    return PDAWDATA.getArtifacts(groupId);
  }

  @Override
  public List<Dependency> getDependencies(
      final String groupId, final String artifactId, final String version) {
    return PDAWDATA.getDependencies(groupId, artifactId, version);
  }

  @Override
  public List<Dependency> getDependents(
      final String groupId, final String artifactId, final String version) {
    return PDAWDATA.getDependents(groupId, artifactId, version);
  }

  @Override
  public List<Group> getGroupIds() {
    return PDAWDATA.getGroupIds();
  }

  @Override
  public List<Version> getVersions(final String groupId, final String artifactId) {
    return PDAWDATA.getVersions(groupId, artifactId);
  }

  @Override
  public List<Metadata> getMetadata(
      final String groupId, final String artifactId, final String version) {
    return PDAWDATA.getMetadata(groupId, artifactId, version);
  }

  @Override
  public Dependency getParsed(final String groupId, final String artifactId, final String version) {
    return PDAWDATA.getParsed(groupId, artifactId, version);
  }

  @Override
  public Map<String, String> getGlobalMetadata() {
    return PDAWDATA.getMetadata();
  }
}
