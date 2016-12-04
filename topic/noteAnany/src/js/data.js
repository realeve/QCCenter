var dataStatic = [
	['成都市', '佰圆券', 'A类', 4.5, 74.28, 77, 945, 4545, 57.64, 435, 51.96, 84.7, 428.3],
	['成都市', '佰圆券', 'B类', 4, 70.32, 61, 983, 3098, 46.11, 441, 57.98, 86.22, 454.9130435],
	['成都市', '佰圆券', 'C类', 3.5, 66.22, 57, 1098, 2039, 26.41, 367, 63.08, 73.8, 452.6486486],
	['成都市', '佰圆券', 'D类', 3.34, 65.44, 66, 845, 1949, 33.12, 313, 67.24, 75.7, 429.6190476],
	['资阳市', '佰圆券', 'A类', 4.5, 74.05, 65, 892, 3633, 45.03, 405, 54.68, 91.96, 471.92],
	['资阳市', '佰圆券', 'B类', 3.8, 68.94, 77, 965, 2444, 53.54, 441, 49.74, 80.42, 453.54],
	['资阳市', '佰圆券', 'C类', 3.23, 62.48, 56, 924, 1533, 29.06, 378, 41.6, 68.02, 415.9],
	['资阳市', '佰圆券', 'D类', 3, 61.48, 49, 948, 1316, 29.8, 435, 42.08, 72.38, 413.85],
	['资阳县', '佰圆券', 'A类', 4.5, 73.88, 71, 894, 2526, 39.01, 454, 53.28, 88.08, 451.7],
	['资阳县', '佰圆券', 'B类', 4, 71.66, 50, 962, 3715, 36.06, 405, 50.16, 75.98, 426.04],
	['资阳县', '佰圆券', 'C类', 3.5, 67.77, 49, 974, 776, 25.46, 379, 42.96, 67.16, 412.1],
	['资阳县', '佰圆券', 'D类', 3, 55.92, 47, 961, 118, 24.09, 261, 39.26, 66.78, 352.89],
	['成都市', '拾圆券', 'A类', 4.5, 73.73, 44, '-', '-', '-', 407, 53.32, 84.78, 350.74],
	['成都市', '拾圆券', 'B类', 4, 68.57, 51, '-', '-', '-', 398, 50.6, 82.9, 348.1],
	['成都市', '拾圆券', 'C类', 3.32, 66.11, 38, '-', '-', '-', 339, 46.82, 73.98, 341.78],
	['成都市', '拾圆券', 'D类', 2.84, 55.34, 33, '-', '-', '-', 257, 41.24, 73.38, 336.2],
	['成都市', '壹圆券', 'B类', 3.5, 65.79, 38, '-', '-', '-', 338, 51.1, 80.7, 294.5],
	['成都市', '壹圆券', 'C类', 3.29, 61.49, 31, '-', '-', '-', 360, 48.84, 51.1, 301.7],
	['成都市', '壹圆券', 'D类', 2.75, 55.23, 20, '-', '-', '-', 280, 40.78, 44.78, 283.62],
	['资阳市', '拾圆券', 'A类', 4.5, 72.68, 43, 925, 2280, 36.06, 410, 53.3, 82.54, 333.36],
	['资阳市', '拾圆券', 'B类', 3.98, 71.3, 40, 777, 989, 42.7, 363, 51.04, 80.06, 331.86],
	['资阳市', '拾圆券', 'C类', 3.5, 62.44, 35, 842, 778, 28.66, 325, 45.46, 74.84, 335.76],
	['资阳市', '拾圆券', 'D类', 2.75, 52.68, 23, 913, 47, 20.94, 296, 40, 68.32, 326.04],
	['资阳市', '壹圆券', 'A类', 4.5, 72.69, 50, 721, 1202, 53.73, 413, 58.96, 63.78, 313.34],
	['资阳市', '壹圆券', 'B类', 4, 71, 53, 707, 1802, 55.62, 400, 57.96, 62.38, 313.64],
	['资阳市', '壹圆券', 'C类', 3.5, 63.97, 35, 632, 371, 46.15, 336, 50.72, 53.3, 310.9],
	['资阳市', '壹圆券', 'D类', 2.83, 50.03, 33, 766, 616, 30.23, 247, 41.32, 47.78, 308.04],
	['资阳县', '拾圆券', 'A类', 4.5, 73.96, 50, 659, 1329, 41.95, 432, 53.54, 88.62, 343.38],
	['资阳县', '拾圆券', 'B类', 3.95, 70.63, 43, 662, 1235, 36.57, 388, 49.16, 82.92, 342.04],
	['资阳县', '拾圆券', 'C类', 3.38, 64.91, 38, 885, 768, 35.84, 315, 46.94, 66.84, 339.1],
	['资阳县', '拾圆券', 'D类', 2.43, 50.16, 34, 769, 18, 22.45, 195, 37.38, 80.1, 309.92],
	['资阳县', '壹圆券', 'A类', 4.28, 66.08, 54, 877, 2484, 43.63, 408, 56.5, 58.62, 317.74],
	['资阳县', '壹圆券', 'B类', 3.59, 62.35, 50, 651, 2921, 46.05, 374, 53.02, 54.02, 317.04],
	['资阳县', '壹圆券', 'C类', 3.43, 59.54, 41, 705, 2007, 39.5, 291, 49.14, 49.92, 318.88],
	['资阳县', '壹圆券', 'D类', 2.08, 43.32, 24, 613, 835, 38.62, 188, 35.16, 43.22, 297.92]
];