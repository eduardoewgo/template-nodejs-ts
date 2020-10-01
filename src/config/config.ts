interface Config {
    application: Application;
}

interface Application {
    env: string;
    port: number;
}

export async function loadConfig(): Promise<Config> {
  const { config } = await import(`./env/${process.env.NODE_ENV || 'development'}`)
  return config
}