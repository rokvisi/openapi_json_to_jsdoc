export function copyToClipboard(text: string) {
    require('child_process').spawn('clip').stdin.end(text)
}
export function YAMLtoJSDoc(yaml: string) {
    return "/**\n * @openapi\n" + yaml.split('\n').map(l => (" * " + l)).join('\n') + "\n*/";
}