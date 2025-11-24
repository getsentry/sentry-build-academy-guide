># OpenTelemetry with Sentry Workshop Guide

This repository contains the documentation and guide for the **OpenTelemetry with Sentry** workshop, built using [Astro Starlight](https://starlight.astro.build).

## About the Workshop

This comprehensive hands-on workshop teaches developers how to send OpenTelemetry traces and logs to Sentry for powerful observability. The workshop uses a real-world **full-stack e-commerce application** with Node.js backend and React frontend.

Topics covered:
- Configuring OpenTelemetry SDK to send data to Sentry via OTLP
- Understanding distributed tracing (traces, transactions, spans)
- Enabling trace propagation between frontend and backend
- Using Sentry's Trace Explorer to investigate performance issues
- Debugging errors with full trace context and logs
- Using the OpenTelemetry Collector (optional)

## Workshop Content

The workshop is organized into 9 modules:

1. **Quickstart** - Set up the OTEL e-commerce application locally
2. **Understanding Distributed Tracing** - Learn about traces, spans, and how they connect services
3. **Configure OpenTelemetry SDK** - Send backend traces/logs to Sentry via OTLP
4. **Connect Frontend to Backend Tracing** - Enable distributed tracing across the full stack
5. **Debugging Common Setup Issues** - Troubleshoot configuration problems
6. **Investigating Performance Issues** - Use traces to find bottlenecks
7. **Investigating Errors with Logs** - Debug errors with full context
8. **(Optional) Using the OTEL Collector** - Learn when and how to use the Collector
9. **Wrapping Up** - Summary and next steps

## Running the Documentation Locally

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/getsentry/otel-workshop-guide.git
cd otel-workshop-guide

# Install dependencies
npm install

# Start the development server
npm run dev
```

The documentation will be available at `http://localhost:4321`.

## Commands

All commands are run from the root of the project:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `npm install`    | Installs dependencies                            |
| `npm run dev`    | Starts local dev server at `localhost:4321`      |
| `npm run build`  | Build your production site to `./dist/`          |
| `npm run preview`| Preview your build locally, before deploying     |

## Workshop Application

This workshop uses a separate demo application. The documentation guides you through cloning and setting it up:

**Demo Application**: [otel-ecommerce](https://github.com/getsentry/otel-ecommerce)

## Workshop Technologies

### Demo Application Stack:
- **Backend**: Node.js + Express with OpenTelemetry auto-instrumentation
- **Frontend**: React with Sentry SDK
- **Database**: PostgreSQL with automatic query tracing
- **Cache**: Redis with operation tracing
- **Infrastructure**: Docker Compose
- **Protocol**: OTLP (OpenTelemetry Protocol)
- **Platform**: Sentry for visualization and debugging

### Documentation:
- **Framework**: Astro Starlight
- **Styling**: Custom CSS (Sentry branding)
- **Components**: Starlight built-in components

## Key Learning Outcomes

After completing this workshop, you'll be able to:

- Configure OpenTelemetry SDK to send data to Sentry via OTLP
- Enable distributed tracing between frontend (Sentry SDK) and backend (OpenTelemetry)
- Understand trace propagation using W3C `traceparent` standard
- Use Sentry's Trace Explorer to investigate performance issues
- Debug errors with full trace context and logs
- Decide when to use direct mode vs collector mode
- Apply vendor-neutral observability patterns to your own applications

## Resources

### OpenTelemetry
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/)
- [OTel JavaScript SDK](https://opentelemetry.io/docs/instrumentation/js/)
- [OTLP Specification](https://opentelemetry.io/docs/specs/otlp/)

### Sentry
- [Sentry OTLP Documentation](https://docs.sentry.io/concepts/otlp/)
- [Distributed Tracing Concepts](https://docs.sentry.io/concepts/key-terms/tracing/distributed-tracing/)
- [Trace Explorer](https://docs.sentry.io/product/explore/trace-explorer/)

### Community
- [OpenTelemetry Slack](https://cloud-native.slack.com/) - #opentelemetry channels
- [Sentry Discord](https://discord.gg/sentry) - Get help and share experiences

## Contributing

If you'd like to contribute to this workshop, feel free to open a pull request or file an issue:

- **Bug reports**: Found incorrect information? Let us know!
- **Content improvements**: Have suggestions for clearer explanations?
- **New scenarios**: Ideas for additional hands-on exercises?

## Astro Starlight Components Used

This workshop uses several Astro Starlight components:

### Steps Component

```markdown
import { Steps } from '@astrojs/starlight/components';

<Steps>
  1. **Install OpenTelemetry SDK**

     ```bash
     npm install @opentelemetry/sdk-node
     ```

  2. **Configure OTLP endpoint**

     Add your Sentry OTLP endpoint...

</Steps>
```

### Card Grid Component

```markdown
import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid>
  <Card title="Understanding Traces" icon="information">
    Learn about traces, transactions, and spans.
  </Card>
</CardGrid>
```

### Callout Components

```markdown
:::tip[Pro Tip]
Your helpful tip content here.
:::

:::note[Important]
Important information to note.
:::

:::caution[Warning]
Warning about potential issues.
:::
```

## License

This workshop content is provided by Sentry for educational purposes.

## Questions or Feedback?

- Join the [Sentry Discord](https://discord.gg/sentry)
- Open an issue on [GitHub](https://github.com/getsentry/otel-workshop-guide/issues)
- Check the [Sentry Documentation](https://docs.sentry.io/)
