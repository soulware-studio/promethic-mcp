# Promethic MCP

[![Listed on mcpservers.org](https://mcpservers.org/badge.svg)](https://mcpservers.org/servers/getpromethic-com-agents)

Public packaging and docs for the [Promethic](https://getpromethic.com) hosted MCP server.

Promethic is a prompt library: store versioned prompts where you set the model, switch models, and dial API-only settings (reasoning, verbosity, and other dials). Text, image, and JSON. Edit the output as you work; it tracks those edits and successful copy/download. Refine proposes the next version.

## Hosted endpoint

- URL: `https://mcp.getpromethic.com/v1`
- Transport: Streamable HTTP
- Auth: Bearer `pmk_` developer key (Claude Desktop, Cursor, Codex CLI) or OAuth (Claude iOS, claude.ai web)
- Docs: https://getpromethic.com/agents
- App: https://app.getpromethic.com

## Clients

See https://getpromethic.com/agents for Claude Desktop, Cursor, Claude iOS, claude.ai, and Codex CLI config.

## License

Documentation in this repo is provided by Soulware Studio LLC. The Promethic product itself remains proprietary.

## Local packaging

This repository includes a minimal stdio MCP server for packaging and introspection. The production MCP server is the hosted endpoint above. No real API keys are included in this repository.
