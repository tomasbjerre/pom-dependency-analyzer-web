package se.bjurr.pomdependencyanalyzer.work;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Comparator;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import se.bjurr.pomdependencyanalyzerweb.main.Main;

public class MainTest {
  private Path tempDirWithPrefix;

  @Before
  public void before() throws IOException {
    tempDirWithPrefix = Files.createTempDirectory("tempfolder");
  }

  @After
  public void after() throws IOException {
    Files.walk(tempDirWithPrefix)
        .sorted(Comparator.reverseOrder())
        .map(Path::toFile)
        .forEach(File::delete);
  }

  @Test
  public void testHelp() throws Exception {
    final String[] args = {
      "-h" //
    };
    Main.main(args);
  }

  // @Test
  public void testStoreApi() throws Exception {
    final String[] args = {
      "-af", tempDirWithPrefix.toFile().getAbsolutePath() //
    };
    Main.main(args);
  }
}
