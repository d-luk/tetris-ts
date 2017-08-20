export const enum Color {
    Yellow = 1,
    Blue = 2,
    Red = 3,
    Green = 4,
    Orange = 5,
    Pink = 6,
    Purple = 7,
    Grey = 8
}

export function getColorCode(color: Color): string {
    switch (color) {
        case Color.Yellow:
            return '#ffeb3b';
        case Color.Blue:
            return '#03a9f4';
        case Color.Red:
            return '#f44336';
        case Color.Green:
            return '#4caf50';
        case Color.Orange:
            return '#ff9800';
        case Color.Pink:
            return '#fbafbc';
        case Color.Purple:
            return '#9c27b0';
        case Color.Grey:
            return '#e0e0e0';
        default:
            return '#000';
    }
}
