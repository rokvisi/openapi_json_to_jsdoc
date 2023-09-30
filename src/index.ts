import * as YAML from 'json-to-pretty-yaml';
import { YAMLtoJSDoc, copyToClipboard } from './utils';
import { spec } from './spec';

const yamlStr = YAMLtoJSDoc(YAML.stringify(spec))
copyToClipboard(yamlStr);