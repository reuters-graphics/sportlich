import * as Soccer from './soccer/api.ts';

declare global {
  namespace API {
    namespace soccer {
      export import paths = Soccer.paths;
      export import components = Soccer.components;
    }
  }
}
