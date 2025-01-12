interface Props {
    active?: boolean;
    className?: string;
    color?: string;
}

export default function BookmarksIcon(props: Props) {
    const [className] = [props.className || "mx-auto"];
    return (
        <svg
            className={className}
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-accent-foreground"
                d="M27.052 53.3333H62.9487C63.462 53.3333 63.9323 53.1197 64.3595 52.6925C64.7867 52.2653 65.0003 51.795 65.0003 51.2817V15.385C65.0003 14.8717 64.7867 14.4014 64.3595 13.9742C63.9323 13.5469 63.462 13.3333 62.9487 13.3333H58.3337V31.3783C58.3337 31.9167 58.1092 32.3206 57.6603 32.59C57.212 32.8589 56.7525 32.8417 56.282 32.5383L53.032 30.635C52.562 30.3439 52.0931 30.1983 51.6253 30.1983C51.1576 30.1983 50.7164 30.3439 50.302 30.635L47.052 32.5383C46.5687 32.8417 46.1059 32.8589 45.6637 32.59C45.2214 32.3206 45.0003 31.9167 45.0003 31.3783V13.3333H27.052C26.5387 13.3333 26.0684 13.5469 25.6412 13.9742C25.2139 14.4014 25.0003 14.8717 25.0003 15.385V51.2817C25.0003 51.795 25.2139 52.2653 25.6412 52.6925C26.0684 53.1197 26.5387 53.3333 27.052 53.3333ZM27.052 56.6667C25.5175 56.6667 24.2364 56.1528 23.2087 55.125C22.1809 54.0972 21.667 52.8161 21.667 51.2817V15.385C21.667 13.8506 22.1809 12.5694 23.2087 11.5417C24.2364 10.5139 25.5175 10 27.052 10H62.9487C64.4831 10 65.7642 10.5139 66.792 11.5417C67.8198 12.5694 68.3337 13.8506 68.3337 15.385V51.2817C68.3337 52.8161 67.8198 54.0972 66.792 55.125C65.7642 56.1528 64.4831 56.6667 62.9487 56.6667H27.052ZM17.052 66.6667C15.5175 66.6667 14.2364 66.1528 13.2087 65.125C12.1809 64.0972 11.667 62.8164 11.667 61.2825V23.7183C11.667 23.2439 11.8262 22.8475 12.1445 22.5292C12.4628 22.2108 12.8592 22.0517 13.3337 22.0517C13.8081 22.0517 14.2045 22.2108 14.5228 22.5292C14.8412 22.8475 15.0003 23.2439 15.0003 23.7183V61.2825C15.0003 61.7953 15.2139 62.2653 15.6412 62.6925C16.0684 63.1197 16.5387 63.3333 17.052 63.3333H54.6153C55.0898 63.3333 55.4862 63.4925 55.8045 63.8108C56.1228 64.1292 56.282 64.5256 56.282 65C56.282 65.4744 56.1228 65.8708 55.8045 66.1892C55.4862 66.5075 55.0898 66.6667 54.6153 66.6667H17.052Z"
            />
        </svg>
    );
}
