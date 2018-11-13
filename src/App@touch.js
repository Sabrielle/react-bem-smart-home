import App from './App';
import { Content } from "./Content/Content@touch";
import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

const cnApp = cn('MainPanel');
const cnContent = cn('Content');
const registry = new Registry({ id: cnApp() });

registry.set(cnContent(), Content);

const Touch = withRegistry(registry)(App);

export default Touch;