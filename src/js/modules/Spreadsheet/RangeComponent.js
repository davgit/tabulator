class RangeComponent {
	constructor(range) {
		this._range = range;

		return new Proxy(this, {
			get: function (target, name, receiver) {
				if (typeof target[name] !== "undefined") {
					return target[name];
				} else {
					return target._range.table.componentFunctionBinder.handle(
						"range",
						target._range,
						name,
					);
				}
			},
		});
	}

	getElement() {
		return this._range.element;
	}

	getData() {
		return this._range.getData();
	}

	getCells() {
		return this._range.getCells();
	}

	getStructuredCells() {
		return this._range.getStructuredCells();
	}

	getRows() {
		return this._range.getRows().map((row) => row.getComponent());
	}

	getColumns() {
		return this._range.getColumns().map((column) => column.getComponent());
	}

	getTop() {
		return this._range.top;
	}

	getBottom() {
		return this._range.bottom;
	}

	getLeft() {
		return this._range.left;
	}

	getRight() {
		return this._range.right;
	}
}

export default RangeComponent;