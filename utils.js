export function distance(x1, y1, x2, y2) {
    const x = x2 - x1;
    const y = y2 - y1;
    return Math.sqrt(x * x + y * y);
}

// 내적으로 선분과 원의 충돌을 검사하는 함수
export function lineCircle(x1, y1, x2, y2, cx, cy, r) {
    const lineLength = distance(x1, y1, x2, y2);
    const point = ((cx - x1) * (x2 - x1) + (cy - y1) * (y2 - y1)) / Math.pow(lineLength, 2);
    const px = x1 + point * (x2 - x1);
    const py = y1 + point * (y2 - y1);

    if (distance(px, py, cx, cy) < r) {
        return true;
    }
    else {
        return false;
    }
}