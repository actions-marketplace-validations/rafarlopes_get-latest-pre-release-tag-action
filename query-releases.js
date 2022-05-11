module.exports = async ({github, context, core}) => {
  const {REPOSITORY} = process.env

  const query = `query($name: String!, $owner: String!) {
    repository(owner: $owner, name: $name) {
       releases(last: 1) {
         nodes { databaseId, name, tagName, isPrerelease }
       }
    }
  }`;

  const variables = {
    owner: context.repo.owner,
    name: `${REPOSITORY}`,
  };

  const result = await github.graphql(query, variables);

  // If no release found or it's not a pre-release, there is nothing else to do
  const {nodes = []} = result.repository.releases
  if (nodes.length === 0 || !nodes[0].isPrerelease) {
    return;
  }

  core.setOutput('tag', nodes[0].tagName);
  core.setOutput('id', nodes[0].databaseId);
}
