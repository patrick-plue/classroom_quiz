'use client';
import { CodeBlock, dracula } from 'react-code-blocks';

function DisplayCode({ text }: { text: string }) {
    return (
        <CodeBlock
            text={text}
            language='js'
            theme={dracula}
            showLineNumbers={false}
        />
    );
}

export default DisplayCode;
