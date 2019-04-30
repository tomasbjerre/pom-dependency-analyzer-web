package se.bjurr.pomdependencyanalyzerweb.data;

import java.util.List;

public class PomAnalyzerArguments {
  public static PomAnalyzerArguments INSTANCE;

  private final String storageFolder;

  private final List<Metadata> metadataList;

  private final String apiFolder;

  private final Boolean keepServerRunning;

  public PomAnalyzerArguments(
      final String storageFolder,
      final List<Metadata> metadataList,
      final String apiFolder,
      final Boolean keepServerRunning) {
    this.storageFolder = storageFolder;
    this.metadataList = metadataList;
    this.apiFolder = apiFolder;
    this.keepServerRunning = keepServerRunning;
  }

  public List<Metadata> getMetadataList() {
    return metadataList;
  }

  public String getStorageFolder() {
    return storageFolder;
  }

  public String getApiFolder() {
    return apiFolder;
  }

  public Boolean getKeepServerRunning() {
    return keepServerRunning;
  }
}
