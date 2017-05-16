import { Injectable } from '@angular/core'

@Injectable()
export class InsultsService {
    private insults: string[] = [
        "Two wrongs don't make a right, take your parents as an example.",
        "If I wanted to kill myself I'd climb your ego and jump to your IQ.",
        "Your family tree must be a cactus because everybody on it is a prick.",
        "Your birth certificate is an apology letter from the condom factory.",
        "Yo're so ugly, when your mom dropped you off at school she got a fine for littering.",
        "You must have been born on a highway because that's where most accidents happen."
    ]

    getRandomInsult(): string {
        var rnd = Math.floor(Math.random() * (this.insults.length - 1));
        return this.insults[rnd];
    }
}