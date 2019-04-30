package se.bjurr.pomdependencyanalyzerweb.work.storage;

public class Metadata {

  private String key;
  private String value;

  public Metadata() {}

  public Metadata(final String key, final String value) {
    this.key = key;
    this.value = value;
  }

  public String getKey() {
    return key;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return "Metadata [key=" + key + ", value=" + value + "]";
  }
}
