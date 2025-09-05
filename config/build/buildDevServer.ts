import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port, open } = options;

  return {
    port,
    open,
    hot: true,
    historyApiFallback: true,
  };
}
