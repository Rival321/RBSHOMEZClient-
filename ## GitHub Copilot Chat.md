## GitHub Copilot Chat

- Extension Version: 0.26.4 (prod)
- VS Code: vscode/1.99.2
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.121.6 (4 ms)
- DNS ipv6 Lookup: Error (3 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (1 ms)
- Electron fetch (configured): HTTP 200 (9286 ms)
- Node.js https: HTTP 200 (620 ms)
- Node.js fetch: HTTP 200 (5968 ms)
- Helix fetch: HTTP 200 (915 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.112.21 (7 ms)
- DNS ipv6 Lookup: Error (3055 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (7 ms)
- Electron fetch (configured): HTTP 200 (3942 ms)
- Node.js https: timed out after 10 seconds
- Node.js fetch: HTTP 200 (2817 ms)
- Helix fetch: timed out after 10 seconds

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).