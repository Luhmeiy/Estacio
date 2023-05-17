const swap = (array, index1, index2) => {
	const holder = array[index2];

	array[index2] = array[index1];
	array[index1] = holder;
};

const shuffle = (array) => {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

const bubble_sort = (array) => {
	array.forEach(() => {
		array.forEach((element, index) => {
			if (element > array[index + 1]) {
				swap(array, index, index + 1);
			}
		});
	});

	return array;
};

const selection_sort = (array) => {
	array.forEach((_, index) => {
		let min = index;

		for (let i = min; i < array.length; i++) {
			if (array[i] < array[min]) {
				min = i;
			}
		}

		swap(array, index, min);
	});

	return array;
};

const quick_sort = (array, first, last) => {
	if (first < last) {
		const pivot = array[last];
		const splitpoint = particionamento(array, first, last, pivot);

		quick_sort(array, first, splitpoint - 1);
		quick_sort(array, splitpoint + 1, last);
	}

	return array;
};

const particionamento = (array, first, last, pivot) => {
	let leftMark = first;
	let rightMark = first;

	while (leftMark <= last) {
		if (array[leftMark] > pivot) {
			leftMark++;
		} else {
			swap(array, leftMark, rightMark);
			leftMark++;
			rightMark++;
		}
	}

	return rightMark - 1;
};
