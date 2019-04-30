package se.bjurr.pomdependencyanalyzerweb.work;

import static org.eclipse.jetty.servlet.ServletContextHandler.NO_SESSIONS;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.glassfish.jersey.jackson.internal.jackson.jaxrs.json.JacksonJaxbJsonProvider;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.servlet.ServletContainer;
import se.bjurr.pomdependencyanalyzerweb.impl.PdawApiImpl;

public class WebApplication {

  public static void main(final String[] args) throws Exception {
    final Server server = startServer();
    server.join();
  }

  public static Server startServer() throws Exception {
    final Server server = new Server(9090);

    final ResourceConfig resourceConfig = new ResourceConfig();

    resourceConfig.register(new PdawApiImpl());

    final ObjectMapper mapper = new ObjectMapper();
    mapper.enable(SerializationFeature.INDENT_OUTPUT);
    final JacksonJaxbJsonProvider provider = new JacksonJaxbJsonProvider();
    provider.setMapper(mapper);
    resourceConfig.register(provider);

    final ServletContextHandler handler = new ServletContextHandler(NO_SESSIONS);
    handler.setContextPath("/");
    handler.addServlet(
        new ServletHolder(new ServletContainer(resourceConfig)),
        "/pom-dependency-analyzer-web/api/*");
    server.setHandler(handler);
    server.start();
    return server;
  }
}
