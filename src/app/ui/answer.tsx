import DisplayCode from './displayCode';

function Answer({ text, type }: { text: string; type: string }) {
    return (
        <div>
            {type === 'code' ? <DisplayCode text={text} /> : <p>{text}</p>}
        </div>
    );
}

export default Answer;
