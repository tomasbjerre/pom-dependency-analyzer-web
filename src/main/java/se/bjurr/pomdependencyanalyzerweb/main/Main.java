package se.bjurr.pomdependencyanalyzerweb.main;

import static se.softhouse.jargo.Arguments.booleanArgument;
import static se.softhouse.jargo.Arguments.helpArgument;
import static se.softhouse.jargo.Arguments.stringArgument;
import static se.softhouse.jargo.CommandLineParser.withArguments;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import se.bjurr.pomdependencyanalyzerweb.data.Metadata;
import se.bjurr.pomdependencyanalyzerweb.data.PomAnalyzerArguments;
import se.bjurr.pomdependencyanalyzerweb.work.APIBuilder;
import se.softhouse.jargo.Argument;
import se.softhouse.jargo.ArgumentException;
import se.softhouse.jargo.ParsedArguments;

public class Main {

  private static final String USER_HOME = "<user home>";

  public static void main(final String args[]) throws Exception {
    final Argument<?> helpArgument = helpArgument("-h", "--help");

    final Argument<String> apiFolderArgument =
        stringArgument("-af", "--api-folder") //
            .description("If supplied, it will dump all API-responses here.") //
            .defaultValue(null) //
            .build();
    final Argument<String> storageFolderArgument =
        stringArgument("-sf", "--storage-folder") //
            .description("This is where it will look for output of Pom Dependency Analyzer.") //
            .defaultValue(USER_HOME + "/.m2/repository") //
            .build();
    final Argument<Boolean> keepServerRunningArgument =
        booleanArgument("-ksr", "--keep-server-running") //
            .description("Keeps the server running.") //
            .defaultValue(false) //
            .build();
    final Argument<List<List<String>>> metadataArgument =
        stringArgument("-md", "--metadata")
            .description(
                "These key/values will be stored together with the artifact. Can be used to record things like artifacts git repo or artifacts Jenkins job URL.") //
            .arity(2) //
            .repeated() //
            .build();

    try {
      final ParsedArguments arg =
          withArguments(
                  helpArgument,
                  storageFolderArgument,
                  metadataArgument,
                  apiFolderArgument,
                  keepServerRunningArgument) //
              .parse(args);

      final String storageFolder =
          arg.get(storageFolderArgument).replace(USER_HOME, System.getProperty("user.home"));
      final String apiFolder = arg.get(apiFolderArgument);
      final Boolean keepServerRunning = arg.get(keepServerRunningArgument);
      final List<Metadata> metadataList =
          arg.get(metadataArgument)
              .stream()
              .map((it) -> new Metadata(it.get(0), it.get(1)))
              .collect(Collectors.toList());

      System.out.println("Storage folder: " + storageFolder);
      System.out.println("Metadata: " + metadataList);
      System.out.println("apiFolder: " + apiFolder);
      System.out.println("keepServerRunning: " + keepServerRunning);

      PomAnalyzerArguments.INSTANCE =
          new PomAnalyzerArguments(storageFolder, metadataList, apiFolder, keepServerRunning);

      final APIBuilder apiBuilder = new APIBuilder();

      apiBuilder.build();

    } catch (final ArgumentException exception) {
      System.out.println(exception.getMessageAndUsage());
      if (!Arrays.asList(args).contains("-h")) {
        System.exit(1);
      }
    } catch (final Throwable t) {
      t.printStackTrace();
    }
  }
}
