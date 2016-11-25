//品种    类型  流通时间    荧光值 W信号 SM值
var data = [
    ['拾圆券', '成都C', 111, 49, 85, 68],
    ['拾圆券', '成都D', 95, 40, 66, 314],
    ['拾圆券', '资阳D', 96, 37, 60, 361],
    ['拾圆券', '成都D', 90, 33, 56, 318],
    ['拾圆券', '资阳C', 90, 41, 65, 295],
    ['拾圆券', '成都A', 69, 48, 64, 305],
    ['拾圆券', '成都A', 69, 42, 61, 334],
    ['拾圆券', '成都D', 69, 38, 58, 363],
    ['拾圆券', '资阳D', 77, 36, 64, 311],
    ['拾圆券', '成都A', 60, 40, 59, 319],
    ['拾圆券', '成都A', 57, 41, 59, 357],
    ['拾圆券', '成都B', 63, 48, 93, 338],
    ['拾圆券', '成都C', 63, 39, 60, 339],
    ['拾圆券', '成都C', 59, 50, 73, 336],
    ['拾圆券', '成都C', 63, 40, 59, 318],
    ['拾圆券', '成都D', 64, 36, 55, 408],
    ['拾圆券', '资阳B', 56, 55, 74, 348],
    ['拾圆券', '资阳B', 56, 54, 85, 446],
    ['拾圆券', '资阳C', 60, 45, 73, 335],
    ['拾圆券', '资阳D', 65, 36, 51, 318],
    ['拾圆券', '资阳D', 62, 27, 37, 310],
    ['拾圆券', '成都A', 45, 44, 70, 365],
    ['拾圆券', '成都A', 45, 45, 55, 364],
    ['拾圆券', '成都C', 45, 41, 60, 357],
    ['拾圆券', '成都D', 45, 38, 61, 318],
    ['拾圆券', '成都D', 47, 37, 67, 314],
    ['拾圆券', '资阳B', 45, 40, 56, 331],
    ['拾圆券', '资阳B', 45, 48, 67, 320],
    ['拾圆券', '资阳C', 50, 39, 67, 360],
    ['拾圆券', '资阳C', 45, 33, 49, 314],
    ['拾圆券', '资阳C', 45, 36, 57, 317],
    ['拾圆券', '资阳C', 51, 40, 60, 341],
    ['拾圆券', '资阳C', 48, 40, 69, 318],
    ['拾圆券', '资阳C', 44, 40, 67, 310],
    ['拾圆券', '资阳D', 52, 31, 48, 368],
    ['拾圆券', '资阳D', 51, 32, 58, 376],
    ['拾圆券', '资阳D', 46, 41, 81, 322],
    ['拾圆券', '成都A', 43, 54, 63, 302],
    ['拾圆券', '成都A', 37, 49, 64, 351],
    ['拾圆券', '成都D', 41, 40, 78, 374],
    ['拾圆券', '资阳A', 43, 54, 78, 306],
    ['拾圆券', '资阳A', 39, 54, 70, 319],
    ['拾圆券', '资阳B', 37, 42, 70, 308],
    ['拾圆券', '资阳C', 41, 51, 64, 363],
    ['拾圆券', '资阳C', 37, 41, 79, 305],
    ['拾圆券', '资阳C', 37, 46, 64, 309],
    ['拾圆券', '资阳C', 40, 48, 73, 379],
    ['拾圆券', '资阳D', 41, 39, 60, 370],
    ['拾圆券', '资阳D', 39, 40, 58, 325],
    ['拾圆券', '资阳D', 43, 42, 82, 310],
    ['拾圆券', '成都A', 15, 59, 92, 363],
    ['拾圆券', '成都A', 15, 55, 96, 369],
    ['拾圆券', '成都A', 15, 57, 84, 357],
    ['拾圆券', '成都A', 15, 53, 75, 322],
    ['拾圆券', '成都A', 15, 55, 90, 316],
    ['拾圆券', '成都A', 28, 54, 66, 320],
    ['拾圆券', '成都A', 30, 57, 81, 355],
    ['拾圆券', '成都A', 22, 58, 91, 362],
    ['拾圆券', '成都A', 17, 60, 125, 322],
    ['拾圆券', '成都A', 17, 51, 91, 360],
    ['拾圆券', '成都A', 16, 54, 78, 335],
    ['拾圆券', '成都A', 16, 56, 87, 310],
    ['拾圆券', '成都A', 16, 49, 66, 373],
    ['拾圆券', '成都A', 22, 61, 134, 380],
    ['拾圆券', '成都A', 21, 53, 91, 314],
    ['拾圆券', '成都A', 20, 53, 77, 332],
    ['拾圆券', '成都A', 20, 56, 76, 367],
    ['拾圆券', '成都A', 20, 52, 84, 317],
    ['拾圆券', '成都A', 20, 55, 81, 330],
    ['拾圆券', '成都B', 30, 49, 72, 335],
    ['拾圆券', '成都B', 14, 49, 84, 372],
    ['拾圆券', '成都B', 20, 53, 85, 353],
    ['拾圆券', '成都B', 16, 55, 88, 322],
    ['拾圆券', '成都B', 20, 51, 97, 308],
    ['拾圆券', '成都B', 20, 42, 74, 362],
    ['拾圆券', '成都B', 30, 53, 104, 318],
    ['拾圆券', '成都B', 14, 55, 97, 363],
    ['拾圆券', '成都B', 16, 55, 74, 347],
    ['拾圆券', '成都B', 14, 50, 82, 368],
    ['拾圆券', '成都B', 20, 46, 74, 344],
    ['拾圆券', '成都B', 16, 52, 69, 327],
    ['拾圆券', '成都B', 14, 51, 85, 326],
    ['拾圆券', '成都B', 15, 53, 82, 358],
    ['拾圆券', '成都B', 33, 48, 85, 345],
    ['拾圆券', '成都B', 15, 56, 97, 372],
    ['拾圆券', '成都B', 15, 55, 85, 339],
    ['拾圆券', '成都B', 17, 43, 64, 362],
    ['拾圆券', '成都B', 22, 52, 90, 307],
    ['拾圆券', '成都B', 15, 55, 91, 360],
    ['拾圆券', '成都B', 16, 50, 81, 351],
    ['拾圆券', '成都B', 15, 50, 97, 379],
    ['拾圆券', '成都B', 17, 42, 79, 339],
    ['拾圆券', '成都B', 33, 54, 77, 326],
    ['拾圆券', '成都B', 22, 49, 71, 388],
    ['拾圆券', '成都B', 20, 49, 66, 377],
    ['拾圆券', '成都B', 30, 49, 64, 379],
    ['拾圆券', '成都B', 21, 52, 85, 414],
    ['拾圆券', '成都B', 16, 55, 103, 328],
    ['拾圆券', '成都B', 20, 48, 70, 360],
    ['拾圆券', '成都B', 15, 53, 96, 372],
    ['拾圆券', '成都C', 32, 43, 64, 339],
    ['拾圆券', '成都C', 21, 40, 55, 328],
    ['拾圆券', '成都C', 30, 44, 62, 340],
    ['拾圆券', '成都C', 28, 52, 71, 381],
    ['拾圆券', '成都C', 15, 56, 84, 381],
    ['拾圆券', '成都C', 15, 45, 63, 370],
    ['拾圆券', '成都C', 15, 56, 95, 354],
    ['拾圆券', '成都C', 15, 51, 69, 387],
    ['拾圆券', '成都C', 22, 54, 91, 322],
    ['拾圆券', '成都C', 33, 41, 72, 314],
    ['拾圆券', '成都C', 22, 45, 64, 339],
    ['拾圆券', '成都C', 34, 54, 94, 322],
    ['拾圆券', '成都C', 16, 50, 71, 355],
    ['拾圆券', '成都C', 30, 50, 90, 290],
    ['拾圆券', '成都C', 15, 50, 77, 352],
    ['拾圆券', '成都C', 15, 47, 85, 365],
    ['拾圆券', '成都C', 14, 44, 78, 366],
    ['拾圆券', '成都C', 23, 49, 84, 389],
    ['拾圆券', '成都C', 20, 44, 69, 316],
    ['拾圆券', '成都C', 15, 50, 74, 316],
    ['拾圆券', '成都C', 17, 41, 73, 347],
    ['拾圆券', '成都C', 14, 53, 72, 368],
    ['拾圆券', '成都C', 20, 50, 75, 407],
    ['拾圆券', '成都C', 14, 48, 94, 366],
    ['拾圆券', '成都C', 15, 40, 64, 377],
    ['拾圆券', '成都C', 20, 48, 71, 346],
    ['拾圆券', '成都D', 20, 44, 64, 339],
    ['拾圆券', '成都D', 15, 45, 92, 357],
    ['拾圆券', '成都D', 30, 35, 64, 299],
    ['拾圆券', '成都D', 30, 39, 63, 317],
    ['拾圆券', '成都D', 15, 44, 78, 330],
    ['拾圆券', '成都D', 15, 41, 73, 317],
    ['拾圆券', '成都D', 20, 44, 79, 330],
    ['拾圆券', '成都D', 33, 38, 79, 295],
    ['拾圆券', '成都D', 22, 41, 79, 347],
    ['拾圆券', '成都D', 22, 42, 109, 345],
    ['拾圆券', '成都D', 25, 41, 98, 317],
    ['拾圆券', '成都D', 34, 40, 76, 305],
    ['拾圆券', '成都D', 16, 42, 74, 329],
    ['拾圆券', '成都D', 15, 44, 92, 326],
    ['拾圆券', '成都D', 15, 46, 82, 356],
    ['拾圆券', '成都D', 15, 43, 71, 356],
    ['拾圆券', '成都D', 14, 45, 102, 357],
    ['拾圆券', '成都D', 23, 41, 76, 314],
    ['拾圆券', '成都D', 30, 42, 64, 313],
    ['拾圆券', '成都D', 15, 59, 88, 338],
    ['拾圆券', '成都D', 20, 43, 75, 348],
    ['拾圆券', '成都D', 16, 42, 78, 347],
    ['拾圆券', '成都D', 30, 48, 73, 414],
    ['拾圆券', '成都D', 15, 41, 69, 412],
    ['拾圆券', '成都D', 14, 46, 99, 356],
    ['拾圆券', '成都D', 14, 42, 64, 316],
    ['拾圆券', '成都D', 20, 38, 59, 314],
    ['拾圆券', '成都D', 30, 49, 71, 317],
    ['拾圆券', '成都D', 21, 43, 81, 331],
    ['拾圆券', '成都D', 14, 40, 73, 318],
    ['拾圆券', '成都D', 15, 55, 128, 318],
    ['拾圆券', '资阳A', 16, 53, 89, 380],
    ['拾圆券', '资阳A', 16, 55, 80, 347],
    ['拾圆券', '资阳A', 30, 54, 84, 339],
    ['拾圆券', '资阳A', 16, 54, 73, 371],
    ['拾圆券', '资阳A', 16, 57, 106, 347],
    ['拾圆券', '资阳A', 16, 52, 97, 308],
    ['拾圆券', '资阳A', 16, 59, 85, 312],
    ['拾圆券', '资阳A', 16, 53, 87, 349],
    ['拾圆券', '资阳A', 15, 49, 76, 317],
    ['拾圆券', '资阳A', 14, 60, 113, 331],
    ['拾圆券', '资阳A', 13, 54, 111, 344],
    ['拾圆券', '资阳A', 16, 49, 80, 317],
    ['拾圆券', '资阳A', 16, 53, 81, 337],
    ['拾圆券', '资阳A', 16, 54, 75, 337],
    ['拾圆券', '资阳A', 31, 52, 63, 359],
    ['拾圆券', '资阳A', 15, 55, 74, 364],
    ['拾圆券', '资阳A', 16, 60, 123, 315],
    ['拾圆券', '资阳A', 16, 48, 61, 348],
    ['拾圆券', '资阳A', 16, 55, 81, 338],
    ['拾圆券', '资阳A', 16, 52, 75, 362],
    ['拾圆券', '资阳A', 16, 46, 62, 331],
    ['拾圆券', '资阳A', 16, 55, 75, 327],
    ['拾圆券', '资阳A', 21, 54, 73, 344],
    ['拾圆券', '资阳A', 16, 56, 73, 314],
    ['拾圆券', '资阳A', 16, 51, 86, 308],
    ['拾圆券', '资阳A', 21, 47, 66, 318],
    ['拾圆券', '资阳A', 16, 56, 75, 342],
    ['拾圆券', '资阳A', 34, 52, 84, 354],
    ['拾圆券', '资阳A', 16, 60, 92, 314],
    ['拾圆券', '资阳A', 16, 50, 76, 312],
    ['拾圆券', '资阳A', 16, 56, 75, 321],
    ['拾圆券', '资阳A', 16, 60, 75, 327],
    ['拾圆券', '资阳A', 14, 56, 99, 341],
    ['拾圆券', '资阳A', 16, 58, 99, 331],
    ['拾圆券', '资阳B', 21, 46, 68, 347],
    ['拾圆券', '资阳B', 22, 52, 90, 313],
    ['拾圆券', '资阳B', 28, 47, 77, 310],
    ['拾圆券', '资阳B', 21, 47, 83, 332],
    ['拾圆券', '资阳B', 16, 54, 92, 306],
    ['拾圆券', '资阳B', 30, 47, 70, 301],
    ['拾圆券', '资阳B', 16, 56, 75, 317],
    ['拾圆券', '资阳B', 16, 42, 60, 292],
    ['拾圆券', '资阳B', 16, 51, 64, 326],
    ['拾圆券', '资阳B', 14, 55, 92, 365],
    ['拾圆券', '资阳B', 15, 53, 79, 318],
    ['拾圆券', '资阳B', 16, 53, 68, 313],
    ['拾圆券', '资阳B', 14, 55, 99, 361],
    ['拾圆券', '资阳B', 22, 55, 86, 322],
    ['拾圆券', '资阳B', 16, 60, 110, 352],
    ['拾圆券', '资阳B', 16, 49, 79, 373],
    ['拾圆券', '资阳B', 16, 41, 59, 311],
    ['拾圆券', '资阳B', 16, 54, 93, 317],
    ['拾圆券', '资阳B', 30, 47, 69, 298],
    ['拾圆券', '资阳B', 16, 53, 73, 321],
    ['拾圆券', '资阳B', 32, 55, 69, 319],
    ['拾圆券', '资阳B', 16, 47, 79, 327],
    ['拾圆券', '资阳B', 25, 51, 72, 332],
    ['拾圆券', '资阳B', 16, 48, 63, 319],
    ['拾圆券', '资阳B', 30, 56, 85, 318],
    ['拾圆券', '资阳B', 17, 52, 70, 319],
    ['拾圆券', '资阳B', 15, 47, 79, 316],
    ['拾圆券', '资阳B', 16, 48, 60, 314],
    ['拾圆券', '资阳B', 22, 49, 104, 310],
    ['拾圆券', '资阳B', 15, 55, 82, 357],
    ['拾圆券', '资阳C', 14, 49, 102, 331],
    ['拾圆券', '资阳C', 32, 41, 64, 354],
    ['拾圆券', '资阳C', 17, 39, 64, 316],
    ['拾圆券', '资阳C', 15, 42, 74, 318],
    ['拾圆券', '资阳C', 22, 46, 94, 321],
    ['拾圆券', '资阳C', 15, 53, 97, 340],
    ['拾圆券', '资阳C', 30, 50, 88, 305],
    ['拾圆券', '资阳C', 32, 45, 69, 327],
    ['拾圆券', '资阳C', 17, 40, 60, 326],
    ['拾圆券', '资阳C', 16, 51, 104, 297],
    ['拾圆券', '资阳C', 16, 50, 78, 342],
    ['拾圆券', '资阳C', 25, 42, 74, 368],
    ['拾圆券', '资阳C', 15, 48, 82, 356],
    ['拾圆券', '资阳C', 20, 41, 76, 340],
    ['拾圆券', '资阳C', 15, 46, 66, 327],
    ['拾圆券', '资阳C', 14, 45, 86, 342],
    ['拾圆券', '资阳C', 22, 52, 88, 347],
    ['拾圆券', '资阳C', 16, 53, 123, 317],
    ['拾圆券', '资阳C', 32, 45, 64, 323],
    ['拾圆券', '资阳C', 15, 48, 78, 373],
    ['拾圆券', '资阳C', 16, 49, 61, 309],
    ['拾圆券', '资阳C', 17, 42, 70, 313],
    ['拾圆券', '资阳C', 29, 45, 74, 320],
    ['拾圆券', '资阳C', 20, 52, 79, 336],
    ['拾圆券', '资阳C', 32, 49, 74, 350],
    ['拾圆券', '资阳C', 16, 54, 104, 327],
    ['拾圆券', '资阳C', 21, 43, 70, 338],
    ['拾圆券', '资阳C', 15, 50, 74, 354],
    ['拾圆券', '资阳D', 33, 40, 62, 302],
    ['拾圆券', '资阳D', 27, 46, 79, 336],
    ['拾圆券', '资阳D', 32, 40, 78, 319],
    ['拾圆券', '资阳D', 21, 31, 52, 335],
    ['拾圆券', '资阳D', 25, 40, 84, 335],
    ['拾圆券', '资阳D', 28, 40, 64, 317],
    ['拾圆券', '资阳D', 29, 40, 60, 307],
    ['拾圆券', '资阳D', 32, 43, 79, 330],
    ['拾圆券', '资阳D', 33, 40, 62, 312],
    ['拾圆券', '资阳D', 14, 40, 79, 300],
    ['拾圆券', '资阳D', 21, 40, 71, 356],
    ['拾圆券', '资阳D', 28, 57, 83, 302],
    ['拾圆券', '资阳D', 20, 46, 91, 342],
    ['拾圆券', '资阳D', 20, 41, 68, 336],
    ['拾圆券', '资阳D', 30, 40, 64, 292],
    ['拾圆券', '资阳D', 17, 39, 59, 330],
    ['拾圆券', '资阳D', 22, 42, 81, 355],
    ['拾圆券', '资阳D', 32, 44, 73, 349],
    ['拾圆券', '资阳D', 15, 51, 97, 339],
    ['拾圆券', '资阳D', 33, 51, 77, 316],
    ['拾圆券', '资阳D', 22, 41, 82, 314],
    ['拾圆券', '资阳D', 32, 41, 80, 322],
    ['拾圆券', '资阳D', 20, 36, 65, 322],
    ['拾圆券', '资阳D', 33, 38, 61, 302],
    ['拾圆券', '资阳D', 32, 36, 60, 325],
    ['拾圆券', '资阳D', 21, 40, 74, 314],
    ['拾圆券', '资阳D', 16, 46, 65, 327],
    ['拾圆券', '资阳D', 14, 40, 70, 309],
    ['拾圆券', '资阳D', 16, 46, 85, 364],
    ['拾圆券', '资阳D', 21, 41, 76, 329],
    ['佰圆券', '成都A', 91, 39, 47, 414],
    ['佰圆券', '成都B', 76, 46, 48, 428],
    ['佰圆券', '成都B', 91, 39, 74, 397],
    ['佰圆券', '成都D', 77, 45, 69, 393],
    ['佰圆券', '成都D', 75, 40, 57, 397],
    ['佰圆券', '成都D', 79, 43, 69, 389],
    ['佰圆券', '成都C', 85, 48, 65, 457],
    ['佰圆券', '资阳C', 77, 42, 64, 439],
    ['佰圆券', '资阳C', 77, 44, 70, 407],
    ['佰圆券', '资阳C', 94, 38, 55, 386],
    ['佰圆券', '资阳C', 95, 36, 54, 456],
    ['佰圆券', '资阳C', 75, 37, 50, 377],
    ['佰圆券', '资阳C', 85, 47, 57, 420],
    ['佰圆券', '资阳D', 114, 49, 87, 420],
    ['佰圆券', '资阳D', 91, 37, 56, 372],
    ['佰圆券', '资阳D', 89, 41, 57, 396],
    ['佰圆券', '成都B', 152, 51, 71, 0],
    ['佰圆券', '成都D', 176, 48, 65, 0],
    ['佰圆券', '成都D', 176, 57, 93, 0],
    ['佰圆券', '成都C', 128, 57, 74, 0],
    ['佰圆券', '成都C', 176, 56, 87, 0],
    ['佰圆券', '成都C', 140, 34, 55, 0],
    ['佰圆券', '成都C', 140, 42, 69, 0],
    ['佰圆券', '成都C', 140, 55, 104, 0],
    ['佰圆券', '成都C', 164, 51, 74, 0],
    ['佰圆券', '资阳C', 164, 47, 81, 0],
    ['佰圆券', '成都A', 68, 40, 60, 392],
    ['佰圆券', '成都A', 62, 41, 57, 402],
    ['佰圆券', '成都B', 51, 44, 52, 416],
    ['佰圆券', '成都B', 71, 44, 57, 439],
    ['佰圆券', '成都B', 42, 39, 54, 455],
    ['佰圆券', '成都D', 66, 32, 45, 452],
    ['佰圆券', '成都D', 58, 40, 69, 435],
    ['佰圆券', '成都D', 49, 36, 60, 447],
    ['佰圆券', '成都C', 62, 38, 55, 330],
    ['佰圆券', '成都C', 60, 48, 71, 458],
    ['佰圆券', '成都C', 60, 39, 60, 468],
    ['佰圆券', '成都C', 57, 41, 68, 481],
    ['佰圆券', '成都C', 61, 41, 65, 490],
    ['佰圆券', '成都C', 58, 42, 71, 530],
    ['佰圆券', '成都C', 68, 52, 80, 456],
    ['佰圆券', '成都C', 53, 40, 67, 488],
    ['佰圆券', '资阳A', 55, 50, 74, 488],
    ['佰圆券', '资阳A', 50, 45, 69, 435],
    ['佰圆券', '资阳A', 60, 55, 68, 565],
    ['佰圆券', '资阳A', 59, 45, 64, 512],
    ['佰圆券', '资阳A', 60, 55, 78, 514],
    ['佰圆券', '资阳B', 42, 41, 60, 389],
    ['佰圆券', '资阳B', 42, 41, 57, 374],
    ['佰圆券', '资阳B', 47, 50, 69, 489],
    ['佰圆券', '资阳B', 61, 53, 72, 469],
    ['佰圆券', '资阳C', 42, 45, 76, 403],
    ['佰圆券', '资阳C', 68, 36, 57, 415],
    ['佰圆券', '资阳C', 56, 38, 63, 460],
    ['佰圆券', '资阳C', 58, 38, 61, 428],
    ['佰圆券', '资阳C', 60, 44, 71, 408],
    ['佰圆券', '资阳C', 72, 38, 62, 333],
    ['佰圆券', '资阳C', 49, 40, 69, 340],
    ['佰圆券', '资阳C', 56, 39, 62, 462],
    ['佰圆券', '资阳C', 57, 38, 73, 415],
    ['佰圆券', '资阳C', 53, 41, 71, 407],
    ['佰圆券', '资阳C', 66, 34, 41, 413],
    ['佰圆券', '资阳C', 64, 35, 37, 339],
    ['佰圆券', '资阳D', 57, 43, 61, 448],
    ['佰圆券', '资阳D', 57, 40, 63, 411],
    ['佰圆券', '资阳D', 55, 40, 84, 430],
    ['佰圆券', '资阳D', 73, 42, 71, 374],
    ['佰圆券', '资阳D', 55, 38, 64, 405],
    ['佰圆券', '成都A', 30, 38, 55, 481],
    ['佰圆券', '成都A', 30, 59, 97, 447],
    ['佰圆券', '成都A', 35, 54, 88, 446],
    ['佰圆券', '成都A', 37, 47, 62, 488],
    ['佰圆券', '成都A', 33, 55, 76, 468],
    ['佰圆券', '成都A', 30, 40, 55, 488],
    ['佰圆券', '成都A', 25, 53, 79, 481],
    ['佰圆券', '成都A', 33, 53, 74, 456],
    ['佰圆券', '成都A', 20, 57, 116, 493],
    ['佰圆券', '成都A', 21, 49, 78, 480],
    ['佰圆券', '成都A', 20, 55, 74, 490],
    ['佰圆券', '成都B', 20, 54, 36, 480],
    ['佰圆券', '成都B', 21, 54, 42, 468],
    ['佰圆券', '成都B', 26, 45, 60, 455],
    ['佰圆券', '成都B', 33, 41, 60, 414],
    ['佰圆券', '成都B', 34, 55, 46, 452],
    ['佰圆券', '成都B', 34, 49, 60, 459],
    ['佰圆券', '成都D', 32, 53, 101, 425],
    ['佰圆券', '成都D', 37, 37, 59, 389],
    ['佰圆券', '成都D', 25, 47, 74, 452],
    ['佰圆券', '成都C', 27, 52, 104, 546],
    ['佰圆券', '资阳A', 29, 55, 85, 526],
    ['佰圆券', '资阳A', 30, 49, 68, 432],
    ['佰圆券', '资阳A', 10, 60, 91, 453],
    ['佰圆券', '资阳A', 30, 55, 72, 470],
    ['佰圆券', '资阳A', 37, 54, 85, 515],
    ['佰圆券', '资阳A', 30, 58, 90, 466],
    ['佰圆券', '资阳A', 9, 55, 72, 499],
    ['佰圆券', '资阳A', 33, 51, 66, 430],
    ['佰圆券', '资阳A', 20, 49, 103, 463],
    ['佰圆券', '资阳A', 33, 57, 99, 432],
    ['佰圆券', '资阳A', 21, 58, 91, 476],
    ['佰圆券', '资阳A', 9, 58, 90, 435],
    ['佰圆券', '资阳A', 30, 52, 78, 431],
    ['佰圆券', '资阳A', 23, 56, 103, 505],
    ['佰圆券', '资阳A', 9, 61, 98, 564],
    ['佰圆券', '资阳A', 30, 52, 64, 452],
    ['佰圆券', '资阳A', 10, 60, 109, 500],
    ['佰圆券', '资阳A', 33, 44, 60, 402],
    ['佰圆券', '资阳A', 23, 51, 59, 497],
    ['佰圆券', '资阳A', 8, 62, 142, 457],
    ['佰圆券', '资阳A', 33, 47, 73, 489],
    ['佰圆券', '资阳A', 8, 50, 71, 498],
    ['佰圆券', '资阳B', 26, 42, 72, 491],
    ['佰圆券', '资阳B', 21, 50, 69, 439],
    ['佰圆券', '资阳B', 23, 53, 92, 511],
    ['佰圆券', '资阳B', 37, 53, 75, 443],
    ['佰圆券', '资阳B', 32, 49, 71, 447],
    ['佰圆券', '资阳B', 33, 52, 87, 563],
    ['佰圆券', '资阳B', 21, 47, 68, 460],
    ['佰圆券', '资阳B', 32, 45, 64, 481],
    ['佰圆券', '资阳B', 34, 53, 83, 439],
    ['佰圆券', '资阳C', 20, 42, 66, 386],
    ['佰圆券', '资阳D', 36, 42, 71, 435],
    ['佰圆券', '资阳D', 32, 41, 58, 364],
    ['佰圆券', '资阳D', 27, 54, 87, 491],
    ['佰圆券', '成都B', 9, 53, 48, 493],
    ['佰圆券', '成都D', 9, 53, 92, 465],
    ['佰圆券', '成都D', 9, 53, 91, 461],
    ['佰圆券', '资阳B', 9, 45, 74, 417],
    ['佰圆券', '资阳B', 9, 53, 87, 513],
    ['佰圆券', '成都A', 8, 48, 68, 505],
    ['佰圆券', '成都C', 8, 46, 71, 458],
    ['佰圆券', '成都C', 8, 56, 94, 547],
    ['佰圆券', '资阳A', 8, 58, 92, 512],
    ['佰圆券', '资阳A', 8, 60, 89, 497],
    ['佰圆券', '资阳D', 8, 52, 88, 550],
    ['佰圆券', '成都A', 8, 53, 103, 456],
    ['佰圆券', '成都A', 8, 54, 97, 469],
    ['佰圆券', '成都A', 8, 47, 83, 419],
    ['佰圆券', '成都B', 8, 45, 63, 437],
    ['佰圆券', '成都B', 8, 53, 48, 500],
    ['佰圆券', '成都B', 8, 52, 55, 442],
    ['佰圆券', '成都B', 8, 57, 35, 423],
    ['佰圆券', '成都B', 8, 54, 57, 429],
    ['佰圆券', '成都B', 8, 50, 70, 442],
    ['佰圆券', '成都C', 8, 53, 110, 414],
    ['佰圆券', '资阳A', 8, 58, 109, 447],
    ['佰圆券', '成都B', 8, 53, 55, 453],
    ['佰圆券', '成都C', 8, 51, 96, 440],
    ['佰圆券', '资阳A', 8, 57, 111, 451],
    ['佰圆券', '资阳B', 8, 49, 97, 464],
    ['佰圆券', '资阳D', 8, 47, 93, 475],
    ['佰圆券', '成都A', 8, 51, 85, 452],
    ['佰圆券', '成都A', 8, 53, 88, 509],
    ['佰圆券', '成都A', 8, 57, 96, 451],
    ['佰圆券', '成都D', 8, 53, 88, 498],
    ['佰圆券', '成都D', 8, 43, 68, 422],
    ['佰圆券', '成都D', 8, 53, 97, 397],
    ['佰圆券', '成都C', 8, 59, 103, 438],
    ['佰圆券', '资阳A', 8, 51, 90, 454],
    ['佰圆券', '资阳A', 8, 55, 90, 470],
    ['佰圆券', '资阳B', 8, 47, 92, 439],
    ['佰圆券', '资阳B', 20, 44, 75, 418],
    ['佰圆券', '成都A', 16, 60, 113, 387],
    ['佰圆券', '成都A', 16, 51, 85, 486],
    ['佰圆券', '成都A', 16, 53, 78, 469],
    ['佰圆券', '成都A', 16, 56, 96, 431],
    ['佰圆券', '成都B', 16, 54, 69, 459],
    ['佰圆券', '成都B', 16, 55, 60, 455],
    ['佰圆券', '成都B', 16, 42, 58, 463],
    ['佰圆券', '成都D', 16, 54, 91, 456],
    ['佰圆券', '成都D', 16, 59, 104, 468],
    ['佰圆券', '成都D', 16, 52, 88, 472],
    ['佰圆券', '成都C', 16, 43, 64, 464],
    ['佰圆券', '成都C', 16, 53, 91, 463],
    ['佰圆券', '资阳A', 16, 54, 91, 467],
    ['佰圆券', '资阳A', 16, 55, 95, 488],
    ['佰圆券', '资阳A', 16, 60, 116, 447],
    ['佰圆券', '资阳A', 16, 57, 99, 459],
    ['佰圆券', '资阳A', 16, 54, 78, 517],
    ['佰圆券', '资阳A', 16, 57, 103, 456],
    ['佰圆券', '资阳B', 16, 53, 77, 434],
    ['佰圆券', '资阳B', 16, 53, 88, 460],
    ['佰圆券', '资阳B', 16, 54, 99, 473],
    ['佰圆券', '资阳B', 16, 59, 92, 457],
    ['佰圆券', '资阳B', 16, 57, 103, 455],
    ['佰圆券', '资阳C', 16, 44, 78, 452],
    ['佰圆券', '成都A', 16, 57, 86, 481],
    ['佰圆券', '成都A', 16, 60, 128, 439],
    ['佰圆券', '成都B', 16, 54, 62, 505],
    ['佰圆券', '成都D', 16, 59, 114, 397],
    ['佰圆券', '资阳A', 16, 58, 97, 431],
    ['佰圆券', '资阳A', 16, 59, 103, 468],
    ['佰圆券', '资阳A', 16, 61, 294, 480],
    ['佰圆券', '资阳B', 16, 57, 96, 463],
    ['佰圆券', '资阳B', 16, 52, 84, 454],
    ['佰圆券', '成都B', 14, 55, 39, 469],
    ['佰圆券', '资阳B', 14, 54, 103, 495],
    ['佰圆券', '成都A', 14, 57, 115, 447],
    ['佰圆券', '成都A', 14, 58, 112, 456],
    ['佰圆券', '成都A', 14, 58, 105, 456],
    ['佰圆券', '成都B', 14, 55, 35, 480],
    ['佰圆券', '成都D', 14, 53, 91, 447],
    ['佰圆券', '成都C', 14, 52, 87, 468],
    ['佰圆券', '成都C', 14, 50, 76, 524],
    ['佰圆券', '资阳B', 14, 54, 103, 463],
    ['佰圆券', '资阳C', 14, 57, 133, 451],
    ['佰圆券', '成都A', 11, 55, 94, 460],
    ['佰圆券', '成都B', 11, 58, 60, 440]
];

var Data1 = data.map(function(item) {
    if (item[0] == '拾圆券') {
        return [item[2], item[3]];
    }
});

var Data2 = data.map(function(item) {
    if (item[0] == '拾圆券') {
        return [item[2], item[4]];
    }
});

var Data3 = data.map(function(item) {
    if (item[0] == '拾圆券') {
        return [item[2], item[5]];
    }
});
option = {
    title: {
        text: 'test',
        subtext: '1'
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        showDelay: 0,
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    xAxis: [{
        type: 'value',
        scale: true,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        splitLine: {
            show: false
        }
    }],
    legend: {
        data: ['荧光值', 'W信号', 'SM值']
    },
    series: [{
        name: '荧光值',
        type: 'scatter',
        data: Data1
    }, {
        name: 'W信号',
        type: 'scatter',
        data: Data2
    }, {
        name: "SM值",
        type: 'scatter',
        data: Data3
    }]
};