import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const hostedEndpoint = "https://mcp.getpromethic.com/v1";
const docsUrl = "https://getpromethic.com/agents";

const server = new Server(
  { name: "promethic-mcp", version: "0.1.0" },
  { capabilities: { tools: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "get_connection_info",
      description: "Return connection details for the hosted Promethic MCP server.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
    },
    {
      name: "get_agents_docs_url",
      description: "Return the Promethic agent setup and client configuration URL.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  switch (request.params.name) {
    case "get_connection_info":
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                url: hostedEndpoint,
                transport: "Streamable HTTP",
                auth: "Bearer pmk_ developer key or OAuth",
                docs: docsUrl,
                note: "This package is a stdio documentation server. Use the hosted URL for production connections.",
              },
              null,
              2,
            ),
          },
        ],
      };
    case "get_agents_docs_url":
      return { content: [{ type: "text", text: docsUrl }] };
    default:
      throw new Error(`Unknown tool: ${request.params.name}`);
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
