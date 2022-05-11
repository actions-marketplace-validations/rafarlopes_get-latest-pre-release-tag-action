# get-latest-pre-release-tag-action
Queries GitHub GraphQL API and returns the latest pre-release tag

# Usage

This action uses an environment variable name `GITHUB_TOKEN` to authenticate and checkout the repository.

<!-- start usage -->
```yaml
- uses: rafarlopes/get-latest-pre-release-tag-action@v1
  env:
    GITHUB_TOKEN: ${{ secrets.MY_PAT }}
  with:
    # The github repository where your releases are
    repository: 'service-abc'
```
<!-- end usage -->

# Outputs

Following outputs are available

| Name  | Type    | Description                                             |
|-------|---------|---------------------------------------------------------|
| `id`  | String  | Latest pre-release id found on application repository   |
| `tag` | String  | Latest pre-release tag found on application repository  |
