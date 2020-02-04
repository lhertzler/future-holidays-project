import ExampleComponent from './src/react/components/ExampleComponent.jsx';
import {mountReact} from './src/react/mountReact';

// the component is rendered to replace the selected html element
mountReact(ExampleComponent, '#theme-react-wrapper');
