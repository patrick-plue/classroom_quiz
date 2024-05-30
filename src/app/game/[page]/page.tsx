import Link from 'next/link';
import Question from '@/app/ui/question';
import Answer from '@/app/ui/answer';
import data from '../../../../question.json';
function Page({ params }: { params: { page: string } }) {
    const questionBlock = data[params.page];
    return (
        <div>
            <Question question={questionBlock.question} />
            {questionBlock.answers.map((answer) => (
                <Answer
                    key={answer}
                    text={answer}
                    type={questionBlock.answerType}
                />
            ))}
            <Link href={`/game/${parseInt(params.page) + 1}`}>
                Next Question
            </Link>
        </div>
    );
}
export default Page;
