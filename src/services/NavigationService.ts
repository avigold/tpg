export default class NavigationService {
    public static openGymMap(): void {
        window.open('https://www.google.com/maps/place/Thor%E2%80%99s+Power+Gym/@64.104544,-21.8739856,17z/' +
            'data=!3m1!4b1!4m5!3m4!1s0x48d60dcedff19d8d:0xe2b80b64d9b7063!8m2!3d64.1045371!4d-21.8718192', '_blank');
    }
}
