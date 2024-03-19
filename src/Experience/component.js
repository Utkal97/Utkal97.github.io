import styles from './style.css';

export function Experience() {
    console.log(styles);
    return (
        <ul className={styles.timeline}>
            <li className={styles["timeline-event"]}>
              <label className={styles["timeline-event-icon"]}></label>
              <div className={styles["timeline-event-copy"]}>
                <p className={styles["timeline-event-thumbnail"] + "font-bold"}>Jan 2022 - Aug 2023</p>
                <h3>Team Lead</h3>
                <h4>Inncircles Arena</h4>
                <p>
                    - Entwickeln von anspruchsvollen, Desktop, Notebook, Smartphones und Tablets (iOS, Android, Windows).<br/>
                    - Ständiges Verbessern des agilen Entwicklungsprozesses beispielsweise durch Grunt, Yeoman, GIT, JIRA und BrowserStack.
                </p>
                <ul className="mt-2 flex flex-wrap">
                    <li className="bg-black p-2 text-white rounded-full">Javascript</li>
                </ul>
              </div>
            </li>

        </ul>
    );
}