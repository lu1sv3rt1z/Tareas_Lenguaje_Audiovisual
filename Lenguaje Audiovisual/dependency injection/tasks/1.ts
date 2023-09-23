class EmailNotifier {
    sendEmail(receiver: string, subject: string, content: string) {
        console.log(`Email sent to ${receiver} with subject "${subject}": ${content}`);
    }

}

class MusicStore {
    notifier: EmailNotifier;

    constructor(notifier: EmailNotifier) {
        this.notifier = notifier;
    }

    newAlbumRelease(email: string, artist: string, album: string) {
        this.notifier.sendEmail(email, "New Album Release", `The new album ${album} by ${artist} is now available!`);
    }
}
