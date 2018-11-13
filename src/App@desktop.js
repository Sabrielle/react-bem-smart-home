import App from './App';
import { Content } from "./Content/Content@desktop";
import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

const cnApp = cn('MainPanel');
const cnContent = cn('Content');
const registry = new Registry({ id: cnApp() });

registry.set(cnContent(), Content);

const Desktop = withRegistry(registry)(App);

export default Desktop;