export type BuildMode = 'development' | 'production';

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
};

export type BuildOptions = {
  open: boolean;
  isDev: boolean;
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
};

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
