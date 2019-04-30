package se.bjurr.pomdependencyanalyzerweb.work;

import org.eclipse.jetty.server.Server;
import se.bjurr.pomdependencyanalyzerweb.data.PomAnalyzerArguments;
import se.bjurr.pomdependencyanalyzerweb.work.storage.PdwDataLoader;
import se.bjurr.pomdependencyanalyzerweb.work.storageapi.PdwApiStorer;

public class APIBuilder {

  public APIBuilder() {}

  public void build() throws Throwable {
    System.out.println("Preparing API...");
    PdwDataLoader.load(PomAnalyzerArguments.INSTANCE.getStorageFolder());
    System.out.println("Preparing API... done");
    final Server server = WebApplication.startServer();
    System.out.println("Server ready");

    if (PomAnalyzerArguments.INSTANCE.getApiFolder() != null) {
      System.out.println("Storing API in " + PomAnalyzerArguments.INSTANCE.getApiFolder() + "...");
      PdwApiStorer.store(PomAnalyzerArguments.INSTANCE.getStorageFolder());
      System.out.println("Storing API... done");
    }

    if (PomAnalyzerArguments.INSTANCE.getKeepServerRunning()) {
      System.out.println("Keeping server running");
      server.join();
    } else {
      server.stop();
    }
  }
}
