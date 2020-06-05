var algo;
function reply_click(clicked_id) {
    algo = Number(clicked_id);
}

var a = function() {
    var MAX_VALUE = 1000;
    var MULTIPLIER = 1;
    var LENGTH;
    var WIDTH;
    var listOfPermutations = [];
    var counter = 0;
    var DELAY = 0;

    function start(){
        setSize(400, 300);
        LENGTH = Number(document.getElementById('customRange11').value);
        WIDTH = getWidth() / LENGTH;
        var myArray = fillArray(LENGTH);
        drawArray(myArray);
        addToList(myArray);
        askWhichAlgorithm(myArray);
        setTimer(drawAll, DELAY);
    }

    function askWhichAlgorithm(arr){
        var numSort = algo;
        const BUBBLE_SORT = 100;
        const INSERTION_SORT = 200;
        const MERGE_SORT = 300;
        const QUICKSORT = 400;
        const SELECTION_SORT = 500;

        if(numSort == BUBBLE_SORT){
            bubbleSort(arr);
        }else if(numSort == SELECTION_SORT){
            selectionSort(arr);
        }else if(numSort == INSERTION_SORT){
            insertionSort(arr);
        }else if(numSort == MERGE_SORT){
            mergeSort(arr, 0, arr.length);
        }else if(numSort == QUICKSORT){
            quickSort(arr, 0, arr.length);
        }else{
            println("Not a valid input :(");
        }
    }

    function addToList(arr){
        var copy = arr.slice(0);
        listOfPermutations.push(copy);
    }

    function drawAll(){
        if(counter >= listOfPermutations.length){
            return;
        }
        removeAll();
        drawArray(listOfPermutations[counter]);
        counter++;
    }


    function drawArray(arr){
        for(var i = 0; i < arr.length; i++){
            var rect = new Rectangle(WIDTH, arr[i] / MAX_VALUE * getHeight());
            rect.setPosition(i * WIDTH, getHeight()- rect.getHeight());
            var color = Color.createFromRGBL(1 - arr[i]/MAX_VALUE, 0, 255, 1 - arr[i]/MAX_VALUE);
            rect.setColor(color);
            add(rect);
        }
    }

    function fillArray(length){
        var arr = [];
        for(var i = 0; i < length; i++){
            arr.push(Randomizer.nextInt(1, MAX_VALUE));
        }
        return arr;
    }

    function swapQS(arr, i, j){
        if(arr[i] == arr[j]){
            return;
        }

        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
        addToList(arr);
    }

    function quickSort(arr, start, end) {
        var i, mid;

        if (end - start < 2) {
            return;
        }

        mid = end;
        for (i = start + 1; i < mid; ) {
            if (compare(arr, i, start) > 0) {
                swapQS(arr, i, --mid);
            } else {
                i++;
            }
        }
        swapQS(arr, start, mid - 1);

        quickSort(arr, start, mid - 1);
        quickSort(arr, mid, end);
    }

    function vswap(arr, a, b) {
        var t = arr[a];
        arr[a] = arr[b];
        arr[b] = t;
        addToList(arr);
    }

    function shift(arr, a, b) {
        for (; b > a; b--)
            vswap(arr, b - 1, b);
    }

    function compare(arr, i, j) {
        return arr[i] - arr[j];
    }

    function merge(arr, i, j, end) {
        for (; i < end; i++) {
            if (compare(arr, i, j) > 0 && j < end)
                shift(arr, i, j++);
        }
    }

    function mergeSort(arr, start, end) {
        var mid = Math.floor((start + end) / 2);

        if (end - start < 2)
            return;

        mergeSort(arr, start, mid);
        mergeSort(arr, mid, end);

        merge(arr, start, mid, end);
    }

    function insertionSort(items) {
        var len     = items.length,
            value,
            i,
            j;

        for (i=0; i < len; i++) {

            value = items[i];
            for (j=i-1; j > -1 && items[j] > value; j--) {
                items[j+1] = items[j];
            }

            items[j+1] = value;

            addToList(items);
        }
    }

    function swap(items, firstIndex, secondIndex){
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    function selectionSort(items){
        var len = items.length,
            min;

        for (var i=0; i < len; i++){
            min = i;

            for (var j=i+1; j < len; j++){
                if (items[j] < items[min]){
                    min = j;
                }
            }

            if (i != min){
                swap(items, i, min);
            }
            addToList(items);
        }
    }

    function bubbleSort(values) {
        var length = values.length - 1;
        do {
            var swapped = false;
            for(var i = 0; i < length; ++i) {
                if (values[i] > values[i+1]) {
                    swap(values, i, i+1)
                    swapped = true;
                    addToList(values);
                }
            }
        }
        while(swapped === true)
    }

    if (typeof start === 'function') {
        start();
    }
};
