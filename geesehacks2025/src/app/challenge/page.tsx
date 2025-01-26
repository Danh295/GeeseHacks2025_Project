interface Challenge {
    title: string;
    subtext: string;
    type: string;
    description: string;
}

interface Progress {
    smallerTitle: string;
    communityStats: string;
}

const challenge: Challenge = {
    title: "Submit a Claim",
    subtext: "Short Term, By 01/26",
    type: "Insurance Claim",
    description: "Submit an insurance claim. You will earn 50 points. Your estimated individual ranking is 54th."
};

const progress: Progress = {
    smallerTitle: "Your Progress",
    communityStats: "Community Stats"
};

const Page = () => {
    return (
        <div>
            <h1>{challenge.title}</h1>
            <h4>{challenge.subtext}</h4>
            <h4>{challenge.type}</h4>
            <p>{challenge.description}</p>
            <h2>{progress.smallerTitle}</h2>
            <div>
                <Card title="Cash back: $247">
                    <ProgressBar progress={75} />
                </Card>
                <Card title="$53 to go" />
                <Card title="Savings for tuition: $2,478" />
            </div>
            <h2>{progress.communityStats}</h2>
            <div>
                <Card title="90% Users Completed" />
                <Card title="98% Success" />
            </div>
        </div>
    );
};

export default Page;
