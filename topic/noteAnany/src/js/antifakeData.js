//品种	类型	流通时间	荧光值	W信号	SM值
var dataFake = [
	['成都', '壹圆券', 'B类', 51, 60, 60, 292],
	['成都', '壹圆券', 'D类', 51, 31, 35, 292],
	['成都', '壹圆券', 'C类', 27, 43, 39, 308],
	['成都', '壹圆券', 'D类', 27, 44, 55, 304],
	['成都', '壹圆券', 'D类', 27, 54, 78, 258],
	['成都', '壹圆券', 'D类', 39, 38, 35, 294],
	['成都', '壹圆券', 'D类', 39, 48, 47, 304],
	['成都', '壹圆券', 'D类', 39, 61, 58, 314],
	['成都', '壹圆券', 'C类', 27, 42, 55, 299],
	['成都', '壹圆券', 'B类', 27, 48, 75, 304],
	['成都', '壹圆券', 'D类', 27, 45, 35, 312],
	['成都', '壹圆券', 'D类', 39, 28, 15, 307],
	['成都', '壹圆券', 'D类', 39, 36, 25, 297],
	['成都', '壹圆券', 'B类', 39, 60, 65, 316],
	['成都', '壹圆券', 'C类', 39, 55, 62, 304],
	['成都', '壹圆券', 'D类', 16, 47, 55, 293],
	['成都', '壹圆券', 'B类', 27, 62, 71, 314],
	['成都', '壹圆券', 'B类', 28, 59, 78, 302],
	['成都', '壹圆券', 'B类', 40, 53, 76, 303],
	['成都', '壹圆券', 'B类', 40, 45, 107, 258],
	['成都', '壹圆券', 'D类', 28, 42, 36, 305],
	['成都', '壹圆券', 'B类', 52, 59, 70, 302],
	['成都', '壹圆券', 'B类', 52, 38, 68, 306],
	['成都', '壹圆券', 'C类', 52, 49, 36, 296],
	['成都', '壹圆券', 'C类', 40, 53, 55, 293],
	['成都', '壹圆券', 'C类', 40, 41, 35, 305],
	['成都', '壹圆券', 'C类', 40, 42, 40, 313],
	['成都', '壹圆券', 'C类', 40, 59, 69, 296],
	['成都', '壹圆券', 'B类', 40, 61, 115, 311],
	['成都', '壹圆券', 'B类', 16, 53, 97, 296],
	['成都', '壹圆券', 'B类', 16, 42, 66, 300],
	['成都', '壹圆券', 'B类', 16, 59, 67, 308],
	['成都', '壹圆券', 'C类', 16, 45, 48, 304],
	['成都', '壹圆券', 'C类', 16, 40, 40, 294],
	['成都', '壹圆券', 'B类', 28, 42, 88, 293],
	['成都', '壹圆券', 'B类', 28, 60, 63, 299],
	['成都', '壹圆券', 'C类', 28, 44, 36, 296],
	['成都', '壹圆券', 'C类', 28, 42, 39, 305],
	['成都', '壹圆券', 'B类', 28, 41, 64, 309],
	['成都', '壹圆券', 'B类', 28, 47, 74, 297],
	['成都', '壹圆券', 'B类', 28, 58, 109, 296],
	['成都', '壹圆券', 'C类', 28, 53, 56, 297],
	['成都', '壹圆券', 'D类', 28, 35, 30, 290],
	['成都', '壹圆券', 'B类', 28, 60, 68, 308],
	['成都', '壹圆券', 'B类', 28, 58, 73, 299],
	['成都', '壹圆券', 'C类', 28, 46, 37, 300],
	['成都', '壹圆券', 'C类', 28, 48, 46, 307],
	['成都', '壹圆券', 'C类', 28, 55, 57, 291],
	['成都', '壹圆券', 'B类', 65, 52, 64, 302],
	['成都', '壹圆券', 'B类', 29, 41, 101, 305],
	['成都', '壹圆券', 'C类', 29, 40, 36, 294],
	['成都', '壹圆券', 'C类', 18, 55, 46, 314],
	['成都', '壹圆券', 'D类', 18, 40, 41, 141],
	['成都', '壹圆券', 'C类', 42, 42, 52, 294],
	['成都', '壹圆券', 'C类', 18, 46, 55, 295],
	['成都', '壹圆券', 'D类', 18, 43, 52, 298],
	['成都', '壹圆券', 'C类', 33, 39, 29, 323],
	['成都', '壹圆券', 'B类', 9, 51, 64, 293],
	['成都', '壹圆券', 'C类', 9, 53, 54, 299],
	['成都', '壹圆券', 'D类', 9, 40, 48, 293],
	['成都', '壹圆券', 'D类', 21, 42, 46, 305],
	['成都', '壹圆券', 'D类', 8, 38, 25, 258],
	['成都', '壹圆券', 'B类', 8, 51, 86, 299],
	['成都', '壹圆券', 'C类', 21, 47, 53, 291],
	['成都', '壹圆券', 'D类', 21, 42, 48, 293],
	['成都', '壹圆券', 'D类', 45, 24, 28, 296],
	['成都', '壹圆券', 'B类', 20, 55, 96, 299],
	['成都', '壹圆券', 'C类', 20, 45, 48, 302],
	['成都', '壹圆券', 'D类', 20, 44, 52, 300],
	['成都', '壹圆券', 'B类', 9, 49, 93, 302],
	['成都', '壹圆券', 'B类', 9, 55, 69, 316],
	['成都', '壹圆券', 'C类', 9, 60, 62, 300],
	['成都', '壹圆券', 'D类', 9, 48, 51, 262],
	['成都', '壹圆券', 'C类', 21, 51, 49, 305],
	['成都', '壹圆券', 'D类', 9, 41, 48, 296],
	['成都', '壹圆券', 'C类', 21, 55, 62, 318],
	['成都', '壹圆券', 'D类', 21, 55, 62, 318],
	['成都', '壹圆券', 'D类', 33, 46, 39, 296],
	['成都', '壹圆券', 'B类', 9, 50, 39, 291],
	['成都', '壹圆券', 'D类', 70, 45, 62, 112],
	['成都', '壹圆券', 'D类', 58, 41, 48, 227],
	['成都', '壹圆券', 'B类', 10, 60, 78, 302],
	['成都', '壹圆券', 'B类', 10, 50, 68, 262],
	['成都', '壹圆券', 'B类', 10, 57, 103, 295],
	['成都', '壹圆券', 'B类', 10, 54, 106, 305],
	['成都', '壹圆券', 'C类', 10, 56, 64, 290],
	['成都', '壹圆券', 'B类', 34, 42, 97, 299],
	['成都', '壹圆券', 'B类', 34, 47, 97, 308],
	['成都', '壹圆券', 'C类', 34, 46, 45, 301],
	['成都', '壹圆券', 'C类', 10, 60, 81, 293],
	['成都', '壹圆券', 'B类', 46, 53, 97, 302],
	['成都', '壹圆券', 'D类', 46, 45, 55, 302],
	['成都', '壹圆券', 'D类', 46, 52, 64, 302],
	['成都', '壹圆券', 'D类', 71, 34, 30, 307],
	['成都', '壹圆券', 'B类', 48, 45, 51, 305],
	['成都', '壹圆券', 'C类', 12, 49, 55, 316],
	['成都', '壹圆券', 'D类', 36, 36, 23, 314],
	['成都', '壹圆券', 'C类', 24, 52, 55, 302],
	['成都', '壹圆券', 'D类', 24, 29, 21, 293],
	['成都', '壹圆券', 'D类', 24, 45, 48, 299],
	['成都', '壹圆券', 'C类', 72, 44, 52, 317],
	['成都', '壹圆券', 'B类', 12, 60, 79, 309],
	['成都', '壹圆券', 'B类', 35, 49, 96, 308],
	['成都', '壹圆券', 'C类', 85, 61, 69, 305],
	['成都', '壹圆券', 'D类', 85, 41, 58, 343],
	['成都', '壹圆券', 'D类', 61, 35, 48, 296],
	['成都', '壹圆券', 'B类', 48, 48, 92, 302],
	['成都', '壹圆券', 'C类', 25, 55, 55, 293],
	['成都', '壹圆券', 'C类', 25, 50, 51, 308],
	['成都', '壹圆券', 'D类', 25, 54, 52, 300],
	['成都', '壹圆券', 'D类', 61, 29, 27, 299],
	['成都', '壹圆券', 'C类', 37, 48, 53, 299],
	['成都', '壹圆券', 'C类', 25, 41, 36, 308],
	['成都', '壹圆券', 'D类', 37, 36, 43, 312],
	['成都', '壹圆券', 'D类', 25, 35, 28, 299],
	['成都', '壹圆券', 'C类', 25, 42, 36, 299],
	['成都', '壹圆券', 'C类', 25, 52, 55, 302],
	['成都', '壹圆券', 'C类', 25, 49, 64, 304],
	['成都', '壹圆券', 'C类', 25, 39, 28, 304],
	['成都', '壹圆券', 'B类', 38, 42, 67, 297],
	['成都', '壹圆券', 'B类', 25, 40, 68, 304],
	['成都', '壹圆券', 'B类', 25, 51, 73, 308],
	['成都', '壹圆券', 'B类', 25, 52, 71, 305],
	['成都', '壹圆券', 'D类', 25, 27, 20, 141],
	["成都", "拾圆券", "C类", 111, 49, 85, 68],
	["成都", "拾圆券", "D类", 95, 40, 66, 314],
	["资阳", "拾圆券", "D类", 96, 37, 60, 361],
	["成都", "拾圆券", "D类", 90, 33, 56, 318],
	["资阳", "拾圆券", "C类", 90, 41, 65, 295],
	["成都", "拾圆券", "A类", 69, 48, 64, 305],
	["成都", "拾圆券", "A类", 69, 42, 61, 334],
	["成都", "拾圆券", "D类", 69, 38, 58, 363],
	["资阳", "拾圆券", "D类", 77, 36, 64, 311],
	["成都", "拾圆券", "A类", 60, 40, 59, 319],
	["成都", "拾圆券", "A类", 57, 41, 59, 357],
	["成都", "拾圆券", "B类", 63, 48, 93, 338],
	["成都", "拾圆券", "C类", 63, 39, 60, 339],
	["成都", "拾圆券", "C类", 59, 50, 73, 336],
	["成都", "拾圆券", "C类", 63, 40, 59, 318],
	["成都", "拾圆券", "D类", 64, 36, 55, 408],
	["资阳", "拾圆券", "B类", 56, 55, 74, 348],
	["资阳", "拾圆券", "B类", 56, 54, 85, 446],
	["资阳", "拾圆券", "C类", 60, 45, 73, 335],
	["资阳", "拾圆券", "D类", 65, 36, 51, 318],
	["资阳", "拾圆券", "D类", 62, 27, 37, 310],
	["成都", "拾圆券", "A类", 45, 44, 70, 365],
	["成都", "拾圆券", "A类", 45, 45, 55, 364],
	["成都", "拾圆券", "C类", 45, 41, 60, 357],
	["成都", "拾圆券", "D类", 45, 38, 61, 318],
	["成都", "拾圆券", "D类", 47, 37, 67, 314],
	["资阳", "拾圆券", "B类", 45, 40, 56, 331],
	["资阳", "拾圆券", "B类", 45, 48, 67, 320],
	["资阳", "拾圆券", "C类", 50, 39, 67, 360],
	["资阳", "拾圆券", "C类", 45, 33, 49, 314],
	["资阳", "拾圆券", "C类", 45, 36, 57, 317],
	["资阳", "拾圆券", "C类", 51, 40, 60, 341],
	["资阳", "拾圆券", "C类", 48, 40, 69, 318],
	["资阳", "拾圆券", "C类", 44, 40, 67, 310],
	["资阳", "拾圆券", "D类", 52, 31, 48, 368],
	["资阳", "拾圆券", "D类", 51, 32, 58, 376],
	["资阳", "拾圆券", "D类", 46, 41, 81, 322],
	["成都", "拾圆券", "A类", 43, 54, 63, 302],
	["成都", "拾圆券", "A类", 37, 49, 64, 351],
	["成都", "拾圆券", "D类", 41, 40, 78, 374],
	["资阳", "拾圆券", "A类", 43, 54, 78, 306],
	["资阳", "拾圆券", "A类", 39, 54, 70, 319],
	["资阳", "拾圆券", "B类", 37, 42, 70, 308],
	["资阳", "拾圆券", "C类", 41, 51, 64, 363],
	["资阳", "拾圆券", "C类", 37, 41, 79, 305],
	["资阳", "拾圆券", "C类", 37, 46, 64, 309],
	["资阳", "拾圆券", "C类", 40, 48, 73, 379],
	["资阳", "拾圆券", "D类", 41, 39, 60, 370],
	["资阳", "拾圆券", "D类", 39, 40, 58, 325],
	["资阳", "拾圆券", "D类", 43, 42, 82, 310],
	["成都", "拾圆券", "A类", 15, 59, 92, 363],
	["成都", "拾圆券", "A类", 15, 55, 96, 369],
	["成都", "拾圆券", "A类", 15, 57, 84, 357],
	["成都", "拾圆券", "A类", 15, 53, 75, 322],
	["成都", "拾圆券", "A类", 15, 55, 90, 316],
	["成都", "拾圆券", "A类", 28, 54, 66, 320],
	["成都", "拾圆券", "A类", 30, 57, 81, 355],
	["成都", "拾圆券", "A类", 22, 58, 91, 362],
	["成都", "拾圆券", "A类", 17, 60, 125, 322],
	["成都", "拾圆券", "A类", 17, 51, 91, 360],
	["成都", "拾圆券", "A类", 16, 54, 78, 335],
	["成都", "拾圆券", "A类", 16, 56, 87, 310],
	["成都", "拾圆券", "A类", 16, 49, 66, 373],
	["成都", "拾圆券", "A类", 22, 61, 134, 380],
	["成都", "拾圆券", "A类", 21, 53, 91, 314],
	["成都", "拾圆券", "A类", 20, 53, 77, 332],
	["成都", "拾圆券", "A类", 20, 56, 76, 367],
	["成都", "拾圆券", "A类", 20, 52, 84, 317],
	["成都", "拾圆券", "A类", 20, 55, 81, 330],
	["成都", "拾圆券", "B类", 30, 49, 72, 335],
	["成都", "拾圆券", "B类", 14, 49, 84, 372],
	["成都", "拾圆券", "B类", 20, 53, 85, 353],
	["成都", "拾圆券", "B类", 16, 55, 88, 322],
	["成都", "拾圆券", "B类", 20, 51, 97, 308],
	["成都", "拾圆券", "B类", 20, 42, 74, 362],
	["成都", "拾圆券", "B类", 30, 53, 104, 318],
	["成都", "拾圆券", "B类", 14, 55, 97, 363],
	["成都", "拾圆券", "B类", 16, 55, 74, 347],
	["成都", "拾圆券", "B类", 14, 50, 82, 368],
	["成都", "拾圆券", "B类", 20, 46, 74, 344],
	["成都", "拾圆券", "B类", 16, 52, 69, 327],
	["成都", "拾圆券", "B类", 14, 51, 85, 326],
	["成都", "拾圆券", "B类", 15, 53, 82, 358],
	["成都", "拾圆券", "B类", 33, 48, 85, 345],
	["成都", "拾圆券", "B类", 15, 56, 97, 372],
	["成都", "拾圆券", "B类", 15, 55, 85, 339],
	["成都", "拾圆券", "B类", 17, 43, 64, 362],
	["成都", "拾圆券", "B类", 22, 52, 90, 307],
	["成都", "拾圆券", "B类", 15, 55, 91, 360],
	["成都", "拾圆券", "B类", 16, 50, 81, 351],
	["成都", "拾圆券", "B类", 15, 50, 97, 379],
	["成都", "拾圆券", "B类", 17, 42, 79, 339],
	["成都", "拾圆券", "B类", 33, 54, 77, 326],
	["成都", "拾圆券", "B类", 22, 49, 71, 388],
	["成都", "拾圆券", "B类", 20, 49, 66, 377],
	["成都", "拾圆券", "B类", 30, 49, 64, 379],
	["成都", "拾圆券", "B类", 21, 52, 85, 414],
	["成都", "拾圆券", "B类", 16, 55, 103, 328],
	["成都", "拾圆券", "B类", 20, 48, 70, 360],
	["成都", "拾圆券", "B类", 15, 53, 96, 372],
	["成都", "拾圆券", "C类", 32, 43, 64, 339],
	["成都", "拾圆券", "C类", 21, 40, 55, 328],
	["成都", "拾圆券", "C类", 30, 44, 62, 340],
	["成都", "拾圆券", "C类", 28, 52, 71, 381],
	["成都", "拾圆券", "C类", 15, 56, 84, 381],
	["成都", "拾圆券", "C类", 15, 45, 63, 370],
	["成都", "拾圆券", "C类", 15, 56, 95, 354],
	["成都", "拾圆券", "C类", 15, 51, 69, 387],
	["成都", "拾圆券", "C类", 22, 54, 91, 322],
	["成都", "拾圆券", "C类", 33, 41, 72, 314],
	["成都", "拾圆券", "C类", 22, 45, 64, 339],
	["成都", "拾圆券", "C类", 34, 54, 94, 322],
	["成都", "拾圆券", "C类", 16, 50, 71, 355],
	["成都", "拾圆券", "C类", 30, 50, 90, 290],
	["成都", "拾圆券", "C类", 15, 50, 77, 352],
	["成都", "拾圆券", "C类", 15, 47, 85, 365],
	["成都", "拾圆券", "C类", 14, 44, 78, 366],
	["成都", "拾圆券", "C类", 23, 49, 84, 389],
	["成都", "拾圆券", "C类", 20, 44, 69, 316],
	["成都", "拾圆券", "C类", 15, 50, 74, 316],
	["成都", "拾圆券", "C类", 17, 41, 73, 347],
	["成都", "拾圆券", "C类", 14, 53, 72, 368],
	["成都", "拾圆券", "C类", 20, 50, 75, 407],
	["成都", "拾圆券", "C类", 14, 48, 94, 366],
	["成都", "拾圆券", "C类", 15, 40, 64, 377],
	["成都", "拾圆券", "C类", 20, 48, 71, 346],
	["成都", "拾圆券", "D类", 20, 44, 64, 339],
	["成都", "拾圆券", "D类", 15, 45, 92, 357],
	["成都", "拾圆券", "D类", 30, 35, 64, 299],
	["成都", "拾圆券", "D类", 30, 39, 63, 317],
	["成都", "拾圆券", "D类", 15, 44, 78, 330],
	["成都", "拾圆券", "D类", 15, 41, 73, 317],
	["成都", "拾圆券", "D类", 20, 44, 79, 330],
	["成都", "拾圆券", "D类", 33, 38, 79, 295],
	["成都", "拾圆券", "D类", 22, 41, 79, 347],
	["成都", "拾圆券", "D类", 22, 42, 109, 345],
	["成都", "拾圆券", "D类", 25, 41, 98, 317],
	["成都", "拾圆券", "D类", 34, 40, 76, 305],
	["成都", "拾圆券", "D类", 16, 42, 74, 329],
	["成都", "拾圆券", "D类", 15, 44, 92, 326],
	["成都", "拾圆券", "D类", 15, 46, 82, 356],
	["成都", "拾圆券", "D类", 15, 43, 71, 356],
	["成都", "拾圆券", "D类", 14, 45, 102, 357],
	["成都", "拾圆券", "D类", 23, 41, 76, 314],
	["成都", "拾圆券", "D类", 30, 42, 64, 313],
	["成都", "拾圆券", "D类", 15, 59, 88, 338],
	["成都", "拾圆券", "D类", 20, 43, 75, 348],
	["成都", "拾圆券", "D类", 16, 42, 78, 347],
	["成都", "拾圆券", "D类", 30, 48, 73, 414],
	["成都", "拾圆券", "D类", 15, 41, 69, 412],
	["成都", "拾圆券", "D类", 14, 46, 99, 356],
	["成都", "拾圆券", "D类", 14, 42, 64, 316],
	["成都", "拾圆券", "D类", 20, 38, 59, 314],
	["成都", "拾圆券", "D类", 30, 49, 71, 317],
	["成都", "拾圆券", "D类", 21, 43, 81, 331],
	["成都", "拾圆券", "D类", 14, 40, 73, 318],
	["成都", "拾圆券", "D类", 15, 55, 128, 318],
	["资阳", "拾圆券", "A类", 16, 53, 89, 380],
	["资阳", "拾圆券", "A类", 16, 55, 80, 347],
	["资阳", "拾圆券", "A类", 30, 54, 84, 339],
	["资阳", "拾圆券", "A类", 16, 54, 73, 371],
	["资阳", "拾圆券", "A类", 16, 57, 106, 347],
	["资阳", "拾圆券", "A类", 16, 52, 97, 308],
	["资阳", "拾圆券", "A类", 16, 59, 85, 312],
	["资阳", "拾圆券", "A类", 16, 53, 87, 349],
	["资阳", "拾圆券", "A类", 15, 49, 76, 317],
	["资阳", "拾圆券", "A类", 14, 60, 113, 331],
	["资阳", "拾圆券", "A类", 13, 54, 111, 344],
	["资阳", "拾圆券", "A类", 16, 49, 80, 317],
	["资阳", "拾圆券", "A类", 16, 53, 81, 337],
	["资阳", "拾圆券", "A类", 16, 54, 75, 337],
	["资阳", "拾圆券", "A类", 31, 52, 63, 359],
	["资阳", "拾圆券", "A类", 15, 55, 74, 364],
	["资阳", "拾圆券", "A类", 16, 60, 123, 315],
	["资阳", "拾圆券", "A类", 16, 48, 61, 348],
	["资阳", "拾圆券", "A类", 16, 55, 81, 338],
	["资阳", "拾圆券", "A类", 16, 52, 75, 362],
	["资阳", "拾圆券", "A类", 16, 46, 62, 331],
	["资阳", "拾圆券", "A类", 16, 55, 75, 327],
	["资阳", "拾圆券", "A类", 21, 54, 73, 344],
	["资阳", "拾圆券", "A类", 16, 56, 73, 314],
	["资阳", "拾圆券", "A类", 16, 51, 86, 308],
	["资阳", "拾圆券", "A类", 21, 47, 66, 318],
	["资阳", "拾圆券", "A类", 16, 56, 75, 342],
	["资阳", "拾圆券", "A类", 34, 52, 84, 354],
	["资阳", "拾圆券", "A类", 16, 60, 92, 314],
	["资阳", "拾圆券", "A类", 16, 50, 76, 312],
	["资阳", "拾圆券", "A类", 16, 56, 75, 321],
	["资阳", "拾圆券", "A类", 16, 60, 75, 327],
	["资阳", "拾圆券", "A类", 14, 56, 99, 341],
	["资阳", "拾圆券", "A类", 16, 58, 99, 331],
	["资阳", "拾圆券", "B类", 21, 46, 68, 347],
	["资阳", "拾圆券", "B类", 22, 52, 90, 313],
	["资阳", "拾圆券", "B类", 28, 47, 77, 310],
	["资阳", "拾圆券", "B类", 21, 47, 83, 332],
	["资阳", "拾圆券", "B类", 16, 54, 92, 306],
	["资阳", "拾圆券", "B类", 30, 47, 70, 301],
	["资阳", "拾圆券", "B类", 16, 56, 75, 317],
	["资阳", "拾圆券", "B类", 16, 42, 60, 292],
	["资阳", "拾圆券", "B类", 16, 51, 64, 326],
	["资阳", "拾圆券", "B类", 14, 55, 92, 365],
	["资阳", "拾圆券", "B类", 15, 53, 79, 318],
	["资阳", "拾圆券", "B类", 16, 53, 68, 313],
	["资阳", "拾圆券", "B类", 14, 55, 99, 361],
	["资阳", "拾圆券", "B类", 22, 55, 86, 322],
	["资阳", "拾圆券", "B类", 16, 60, 110, 352],
	["资阳", "拾圆券", "B类", 16, 49, 79, 373],
	["资阳", "拾圆券", "B类", 16, 41, 59, 311],
	["资阳", "拾圆券", "B类", 16, 54, 93, 317],
	["资阳", "拾圆券", "B类", 30, 47, 69, 298],
	["资阳", "拾圆券", "B类", 16, 53, 73, 321],
	["资阳", "拾圆券", "B类", 32, 55, 69, 319],
	["资阳", "拾圆券", "B类", 16, 47, 79, 327],
	["资阳", "拾圆券", "B类", 25, 51, 72, 332],
	["资阳", "拾圆券", "B类", 16, 48, 63, 319],
	["资阳", "拾圆券", "B类", 30, 56, 85, 318],
	["资阳", "拾圆券", "B类", 17, 52, 70, 319],
	["资阳", "拾圆券", "B类", 15, 47, 79, 316],
	["资阳", "拾圆券", "B类", 16, 48, 60, 314],
	["资阳", "拾圆券", "B类", 22, 49, 104, 310],
	["资阳", "拾圆券", "B类", 15, 55, 82, 357],
	["资阳", "拾圆券", "C类", 14, 49, 102, 331],
	["资阳", "拾圆券", "C类", 32, 41, 64, 354],
	["资阳", "拾圆券", "C类", 17, 39, 64, 316],
	["资阳", "拾圆券", "C类", 15, 42, 74, 318],
	["资阳", "拾圆券", "C类", 22, 46, 94, 321],
	["资阳", "拾圆券", "C类", 15, 53, 97, 340],
	["资阳", "拾圆券", "C类", 30, 50, 88, 305],
	["资阳", "拾圆券", "C类", 32, 45, 69, 327],
	["资阳", "拾圆券", "C类", 17, 40, 60, 326],
	["资阳", "拾圆券", "C类", 16, 51, 104, 297],
	["资阳", "拾圆券", "C类", 16, 50, 78, 342],
	["资阳", "拾圆券", "C类", 25, 42, 74, 368],
	["资阳", "拾圆券", "C类", 15, 48, 82, 356],
	["资阳", "拾圆券", "C类", 20, 41, 76, 340],
	["资阳", "拾圆券", "C类", 15, 46, 66, 327],
	["资阳", "拾圆券", "C类", 14, 45, 86, 342],
	["资阳", "拾圆券", "C类", 22, 52, 88, 347],
	["资阳", "拾圆券", "C类", 16, 53, 123, 317],
	["资阳", "拾圆券", "C类", 32, 45, 64, 323],
	["资阳", "拾圆券", "C类", 15, 48, 78, 373],
	["资阳", "拾圆券", "C类", 16, 49, 61, 309],
	["资阳", "拾圆券", "C类", 17, 42, 70, 313],
	["资阳", "拾圆券", "C类", 29, 45, 74, 320],
	["资阳", "拾圆券", "C类", 20, 52, 79, 336],
	["资阳", "拾圆券", "C类", 32, 49, 74, 350],
	["资阳", "拾圆券", "C类", 16, 54, 104, 327],
	["资阳", "拾圆券", "C类", 21, 43, 70, 338],
	["资阳", "拾圆券", "C类", 15, 50, 74, 354],
	["资阳", "拾圆券", "D类", 33, 40, 62, 302],
	["资阳", "拾圆券", "D类", 27, 46, 79, 336],
	["资阳", "拾圆券", "D类", 32, 40, 78, 319],
	["资阳", "拾圆券", "D类", 21, 31, 52, 335],
	["资阳", "拾圆券", "D类", 25, 40, 84, 335],
	["资阳", "拾圆券", "D类", 28, 40, 64, 317],
	["资阳", "拾圆券", "D类", 29, 40, 60, 307],
	["资阳", "拾圆券", "D类", 32, 43, 79, 330],
	["资阳", "拾圆券", "D类", 33, 40, 62, 312],
	["资阳", "拾圆券", "D类", 14, 40, 79, 300],
	["资阳", "拾圆券", "D类", 21, 40, 71, 356],
	["资阳", "拾圆券", "D类", 28, 57, 83, 302],
	["资阳", "拾圆券", "D类", 20, 46, 91, 342],
	["资阳", "拾圆券", "D类", 20, 41, 68, 336],
	["资阳", "拾圆券", "D类", 30, 40, 64, 292],
	["资阳", "拾圆券", "D类", 17, 39, 59, 330],
	["资阳", "拾圆券", "D类", 22, 42, 81, 355],
	["资阳", "拾圆券", "D类", 32, 44, 73, 349],
	["资阳", "拾圆券", "D类", 15, 51, 97, 339],
	["资阳", "拾圆券", "D类", 33, 51, 77, 316],
	["资阳", "拾圆券", "D类", 22, 41, 82, 314],
	["资阳", "拾圆券", "D类", 32, 41, 80, 322],
	["资阳", "拾圆券", "D类", 20, 36, 65, 322],
	["资阳", "拾圆券", "D类", 33, 38, 61, 302],
	["资阳", "拾圆券", "D类", 32, 36, 60, 325],
	["资阳", "拾圆券", "D类", 21, 40, 74, 314],
	["资阳", "拾圆券", "D类", 16, 46, 65, 327],
	["资阳", "拾圆券", "D类", 14, 40, 70, 309],
	["资阳", "拾圆券", "D类", 16, 46, 85, 364],
	["资阳", "拾圆券", "D类", 21, 41, 76, 329],
	["成都", "佰圆券", "A类", 91, 39, 47, 414],
	["成都", "佰圆券", "B类", 76, 46, 48, 428],
	["成都", "佰圆券", "B类", 91, 39, 74, 397],
	["成都", "佰圆券", "D类", 77, 45, 69, 393],
	["成都", "佰圆券", "D类", 75, 40, 57, 397],
	["成都", "佰圆券", "D类", 79, 43, 69, 389],
	["成都", "佰圆券", "C类", 85, 48, 65, 457],
	["资阳", "佰圆券", "C类", 77, 42, 64, 439],
	["资阳", "佰圆券", "C类", 77, 44, 70, 407],
	["资阳", "佰圆券", "C类", 94, 38, 55, 386],
	["资阳", "佰圆券", "C类", 95, 36, 54, 456],
	["资阳", "佰圆券", "C类", 75, 37, 50, 377],
	["资阳", "佰圆券", "C类", 85, 47, 57, 420],
	["资阳", "佰圆券", "D类", 114, 49, 87, 420],
	["资阳", "佰圆券", "D类", 91, 37, 56, 372],
	["资阳", "佰圆券", "D类", 89, 41, 57, 396],
	["成都", "佰圆券", "B类", 152, 51, 71, 0],
	["成都", "佰圆券", "D类", 176, 48, 65, 0],
	["成都", "佰圆券", "D类", 176, 57, 93, 0],
	["成都", "佰圆券", "C类", 128, 57, 74, 0],
	["成都", "佰圆券", "C类", 176, 56, 87, 0],
	["成都", "佰圆券", "C类", 140, 34, 55, 0],
	["成都", "佰圆券", "C类", 140, 42, 69, 0],
	["成都", "佰圆券", "C类", 140, 55, 104, 0],
	["成都", "佰圆券", "C类", 164, 51, 74, 0],
	["资阳", "佰圆券", "C类", 164, 47, 81, 0],
	["成都", "佰圆券", "A类", 68, 40, 60, 392],
	["成都", "佰圆券", "A类", 62, 41, 57, 402],
	["成都", "佰圆券", "B类", 51, 44, 52, 416],
	["成都", "佰圆券", "B类", 71, 44, 57, 439],
	["成都", "佰圆券", "B类", 42, 39, 54, 455],
	["成都", "佰圆券", "D类", 66, 32, 45, 452],
	["成都", "佰圆券", "D类", 58, 40, 69, 435],
	["成都", "佰圆券", "D类", 49, 36, 60, 447],
	["成都", "佰圆券", "C类", 62, 38, 55, 330],
	["成都", "佰圆券", "C类", 60, 48, 71, 458],
	["成都", "佰圆券", "C类", 60, 39, 60, 468],
	["成都", "佰圆券", "C类", 57, 41, 68, 481],
	["成都", "佰圆券", "C类", 61, 41, 65, 490],
	["成都", "佰圆券", "C类", 58, 42, 71, 530],
	["成都", "佰圆券", "C类", 68, 52, 80, 456],
	["成都", "佰圆券", "C类", 53, 40, 67, 488],
	["资阳", "佰圆券", "A类", 55, 50, 74, 488],
	["资阳", "佰圆券", "A类", 50, 45, 69, 435],
	["资阳", "佰圆券", "A类", 60, 55, 68, 565],
	["资阳", "佰圆券", "A类", 59, 45, 64, 512],
	["资阳", "佰圆券", "A类", 60, 55, 78, 514],
	["资阳", "佰圆券", "B类", 42, 41, 60, 389],
	["资阳", "佰圆券", "B类", 42, 41, 57, 374],
	["资阳", "佰圆券", "B类", 47, 50, 69, 489],
	["资阳", "佰圆券", "B类", 61, 53, 72, 469],
	["资阳", "佰圆券", "C类", 42, 45, 76, 403],
	["资阳", "佰圆券", "C类", 68, 36, 57, 415],
	["资阳", "佰圆券", "C类", 56, 38, 63, 460],
	["资阳", "佰圆券", "C类", 58, 38, 61, 428],
	["资阳", "佰圆券", "C类", 60, 44, 71, 408],
	["资阳", "佰圆券", "C类", 72, 38, 62, 333],
	["资阳", "佰圆券", "C类", 49, 40, 69, 340],
	["资阳", "佰圆券", "C类", 56, 39, 62, 462],
	["资阳", "佰圆券", "C类", 57, 38, 73, 415],
	["资阳", "佰圆券", "C类", 53, 41, 71, 407],
	["资阳", "佰圆券", "C类", 66, 34, 41, 413],
	["资阳", "佰圆券", "C类", 64, 35, 37, 339],
	["资阳", "佰圆券", "D类", 57, 43, 61, 448],
	["资阳", "佰圆券", "D类", 57, 40, 63, 411],
	["资阳", "佰圆券", "D类", 55, 40, 84, 430],
	["资阳", "佰圆券", "D类", 73, 42, 71, 374],
	["资阳", "佰圆券", "D类", 55, 38, 64, 405],
	["成都", "佰圆券", "A类", 30, 38, 55, 481],
	["成都", "佰圆券", "A类", 30, 59, 97, 447],
	["成都", "佰圆券", "A类", 35, 54, 88, 446],
	["成都", "佰圆券", "A类", 37, 47, 62, 488],
	["成都", "佰圆券", "A类", 33, 55, 76, 468],
	["成都", "佰圆券", "A类", 30, 40, 55, 488],
	["成都", "佰圆券", "A类", 25, 53, 79, 481],
	["成都", "佰圆券", "A类", 33, 53, 74, 456],
	["成都", "佰圆券", "A类", 20, 57, 116, 493],
	["成都", "佰圆券", "A类", 21, 49, 78, 480],
	["成都", "佰圆券", "A类", 20, 55, 74, 490],
	["成都", "佰圆券", "B类", 20, 54, 36, 480],
	["成都", "佰圆券", "B类", 21, 54, 42, 468],
	["成都", "佰圆券", "B类", 26, 45, 60, 455],
	["成都", "佰圆券", "B类", 33, 41, 60, 414],
	["成都", "佰圆券", "B类", 34, 55, 46, 452],
	["成都", "佰圆券", "B类", 34, 49, 60, 459],
	["成都", "佰圆券", "D类", 32, 53, 101, 425],
	["成都", "佰圆券", "D类", 37, 37, 59, 389],
	["成都", "佰圆券", "D类", 25, 47, 74, 452],
	["成都", "佰圆券", "C类", 27, 52, 104, 546],
	["资阳", "佰圆券", "A类", 29, 55, 85, 526],
	["资阳", "佰圆券", "A类", 30, 49, 68, 432],
	["资阳", "佰圆券", "A类", 10, 60, 91, 453],
	["资阳", "佰圆券", "A类", 30, 55, 72, 470],
	["资阳", "佰圆券", "A类", 37, 54, 85, 515],
	["资阳", "佰圆券", "A类", 30, 58, 90, 466],
	["资阳", "佰圆券", "A类", 9, 55, 72, 499],
	["资阳", "佰圆券", "A类", 33, 51, 66, 430],
	["资阳", "佰圆券", "A类", 20, 49, 103, 463],
	["资阳", "佰圆券", "A类", 33, 57, 99, 432],
	["资阳", "佰圆券", "A类", 21, 58, 91, 476],
	["资阳", "佰圆券", "A类", 9, 58, 90, 435],
	["资阳", "佰圆券", "A类", 30, 52, 78, 431],
	["资阳", "佰圆券", "A类", 23, 56, 103, 505],
	["资阳", "佰圆券", "A类", 9, 61, 98, 564],
	["资阳", "佰圆券", "A类", 30, 52, 64, 452],
	["资阳", "佰圆券", "A类", 10, 60, 109, 500],
	["资阳", "佰圆券", "A类", 33, 44, 60, 402],
	["资阳", "佰圆券", "A类", 23, 51, 59, 497],
	["资阳", "佰圆券", "A类", 8, 62, 142, 457],
	["资阳", "佰圆券", "A类", 33, 47, 73, 489],
	["资阳", "佰圆券", "A类", 8, 50, 71, 498],
	["资阳", "佰圆券", "B类", 26, 42, 72, 491],
	["资阳", "佰圆券", "B类", 21, 50, 69, 439],
	["资阳", "佰圆券", "B类", 23, 53, 92, 511],
	["资阳", "佰圆券", "B类", 37, 53, 75, 443],
	["资阳", "佰圆券", "B类", 32, 49, 71, 447],
	["资阳", "佰圆券", "B类", 33, 52, 87, 563],
	["资阳", "佰圆券", "B类", 21, 47, 68, 460],
	["资阳", "佰圆券", "B类", 32, 45, 64, 481],
	["资阳", "佰圆券", "B类", 34, 53, 83, 439],
	["资阳", "佰圆券", "C类", 20, 42, 66, 386],
	["资阳", "佰圆券", "D类", 36, 42, 71, 435],
	["资阳", "佰圆券", "D类", 32, 41, 58, 364],
	["资阳", "佰圆券", "D类", 27, 54, 87, 491],
	["成都", "佰圆券", "B类", 9, 53, 48, 493],
	["成都", "佰圆券", "D类", 9, 53, 92, 465],
	["成都", "佰圆券", "D类", 9, 53, 91, 461],
	["资阳", "佰圆券", "B类", 9, 45, 74, 417],
	["资阳", "佰圆券", "B类", 9, 53, 87, 513],
	["成都", "佰圆券", "A类", 8, 48, 68, 505],
	["成都", "佰圆券", "C类", 8, 46, 71, 458],
	["成都", "佰圆券", "C类", 8, 56, 94, 547],
	["资阳", "佰圆券", "A类", 8, 58, 92, 512],
	["资阳", "佰圆券", "A类", 8, 60, 89, 497],
	["资阳", "佰圆券", "D类", 8, 52, 88, 550],
	["成都", "佰圆券", "A类", 8, 53, 103, 456],
	["成都", "佰圆券", "A类", 8, 54, 97, 469],
	["成都", "佰圆券", "A类", 8, 47, 83, 419],
	["成都", "佰圆券", "B类", 8, 45, 63, 437],
	["成都", "佰圆券", "B类", 8, 53, 48, 500],
	["成都", "佰圆券", "B类", 8, 52, 55, 442],
	["成都", "佰圆券", "B类", 8, 57, 35, 423],
	["成都", "佰圆券", "B类", 8, 54, 57, 429],
	["成都", "佰圆券", "B类", 8, 50, 70, 442],
	["成都", "佰圆券", "C类", 8, 53, 110, 414],
	["资阳", "佰圆券", "A类", 8, 58, 109, 447],
	["成都", "佰圆券", "B类", 8, 53, 55, 453],
	["成都", "佰圆券", "C类", 8, 51, 96, 440],
	["资阳", "佰圆券", "A类", 8, 57, 111, 451],
	["资阳", "佰圆券", "B类", 8, 49, 97, 464],
	["资阳", "佰圆券", "D类", 8, 47, 93, 475],
	["成都", "佰圆券", "A类", 8, 51, 85, 452],
	["成都", "佰圆券", "A类", 8, 53, 88, 509],
	["成都", "佰圆券", "A类", 8, 57, 96, 451],
	["成都", "佰圆券", "D类", 8, 53, 88, 498],
	["成都", "佰圆券", "D类", 8, 43, 68, 422],
	["成都", "佰圆券", "D类", 8, 53, 97, 397],
	["成都", "佰圆券", "C类", 8, 59, 103, 438],
	["资阳", "佰圆券", "A类", 8, 51, 90, 454],
	["资阳", "佰圆券", "A类", 8, 55, 90, 470],
	["资阳", "佰圆券", "B类", 8, 47, 92, 439],
	["资阳", "佰圆券", "B类", 20, 44, 75, 418],
	["成都", "佰圆券", "A类", 16, 60, 113, 387],
	["成都", "佰圆券", "A类", 16, 51, 85, 486],
	["成都", "佰圆券", "A类", 16, 53, 78, 469],
	["成都", "佰圆券", "A类", 16, 56, 96, 431],
	["成都", "佰圆券", "B类", 16, 54, 69, 459],
	["成都", "佰圆券", "B类", 16, 55, 60, 455],
	["成都", "佰圆券", "B类", 16, 42, 58, 463],
	["成都", "佰圆券", "D类", 16, 54, 91, 456],
	["成都", "佰圆券", "D类", 16, 59, 104, 468],
	["成都", "佰圆券", "D类", 16, 52, 88, 472],
	["成都", "佰圆券", "C类", 16, 43, 64, 464],
	["成都", "佰圆券", "C类", 16, 53, 91, 463],
	["资阳", "佰圆券", "A类", 16, 54, 91, 467],
	["资阳", "佰圆券", "A类", 16, 55, 95, 488],
	["资阳", "佰圆券", "A类", 16, 60, 116, 447],
	["资阳", "佰圆券", "A类", 16, 57, 99, 459],
	["资阳", "佰圆券", "A类", 16, 54, 78, 517],
	["资阳", "佰圆券", "A类", 16, 57, 103, 456],
	["资阳", "佰圆券", "B类", 16, 53, 77, 434],
	["资阳", "佰圆券", "B类", 16, 53, 88, 460],
	["资阳", "佰圆券", "B类", 16, 54, 99, 473],
	["资阳", "佰圆券", "B类", 16, 59, 92, 457],
	["资阳", "佰圆券", "B类", 16, 57, 103, 455],
	["资阳", "佰圆券", "C类", 16, 44, 78, 452],
	["成都", "佰圆券", "A类", 16, 57, 86, 481],
	["成都", "佰圆券", "A类", 16, 60, 128, 439],
	["成都", "佰圆券", "B类", 16, 54, 62, 505],
	["成都", "佰圆券", "D类", 16, 59, 114, 397],
	["资阳", "佰圆券", "A类", 16, 58, 97, 431],
	["资阳", "佰圆券", "A类", 16, 59, 103, 468],
	//["资阳", "佰圆券", "A类", 16, 61, 294, 480],
	["资阳", "佰圆券", "B类", 16, 57, 96, 463],
	["资阳", "佰圆券", "B类", 16, 52, 84, 454],
	["成都", "佰圆券", "B类", 14, 55, 39, 469],
	["资阳", "佰圆券", "B类", 14, 54, 103, 495],
	["成都", "佰圆券", "A类", 14, 57, 115, 447],
	["成都", "佰圆券", "A类", 14, 58, 112, 456],
	["成都", "佰圆券", "A类", 14, 58, 105, 456],
	["成都", "佰圆券", "B类", 14, 55, 35, 480],
	["成都", "佰圆券", "D类", 14, 53, 91, 447],
	["成都", "佰圆券", "C类", 14, 52, 87, 468],
	["成都", "佰圆券", "C类", 14, 50, 76, 524],
	["资阳", "佰圆券", "B类", 14, 54, 103, 463],
	["资阳", "佰圆券", "C类", 14, 57, 133, 451],
	["成都", "佰圆券", "A类", 11, 55, 94, 460],
	["成都", "佰圆券", "B类", 11, 58, 60, 440]
];