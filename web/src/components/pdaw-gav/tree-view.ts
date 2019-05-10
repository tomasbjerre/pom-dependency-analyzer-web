import { Dependency } from '@/services/pdaw';

/*
    [
      {
        id: 1,
        name: 'se.bjurr.violations',
        children: [
          {
            id: 2,
            name: 'violations-lib',
            children: [{ id: 6, name: '1.1' }, { id: 7, name: '1.2' }],
          },
          { id: 3, name: 'violation-comments-lib' },
        ],
      },
    ];
 */
export default class TreeView {
  constructor(private dependencies: Dependency[]) {}

  public getItems(): any[] {
    const dependenciesPerGroup = new Map<string, Dependency[]>();
    this.dependencies.forEach(dep => {
      const deps: Dependency[] = dependenciesPerGroup.get(dep.groupId) || [];
      deps.push(dep);
      dependenciesPerGroup.set(dep.groupId, deps);
    });

    let idC = 0;

    const result: any[] = [];
    Array.from(dependenciesPerGroup.keys()).forEach(groupId => {
      result.push({
        id: idC++,
        name: groupId,
        children: this.getArtifacts(dependenciesPerGroup.get(groupId) || []),
      });
    });

    return result;
  }

  public getArtifacts(dependencies: Dependency[]) {
    const dependenciesPerArtifact = new Map<string, Dependency[]>();
    this.dependencies.forEach(dep => {
      const deps: Dependency[] =
        dependenciesPerArtifact.get(dep.artifactId) || [];
      deps.push(dep);
      dependenciesPerArtifact.set(dep.artifactId, deps);
    });

    let idC = 0;

    const result: any[] = [];
    Array.from(dependenciesPerArtifact.keys()).forEach(artifactId => {
      result.push({
        id: idC++,
        name: artifactId,
        children: this.getVersions(
          dependenciesPerArtifact.get(artifactId) || [],
        ),
      });
    });

    return result;
  }

  public getVersions(dependencies: Dependency[]) {
    const dependenciesPerVersion = new Map<string, Dependency[]>();
    this.dependencies.forEach(dep => {
      const deps: Dependency[] = dependenciesPerVersion.get(dep.version) || [];
      deps.push(dep);
      dependenciesPerVersion.set(dep.version, deps);
    });

    let idC = 0;

    const result: any[] = [];
    Array.from(dependenciesPerVersion.keys()).forEach(version => {
      result.push({
        id: idC++,
        name: version,
        link:
          '/groupId/' +
          dependencies[0].groupId +
          '/artifactId/' +
          dependencies[0].artifactId +
          '/version/' +
          version,
        children: [],
      });
    });

    return result;
  }
}
