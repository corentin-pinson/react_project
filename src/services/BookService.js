class BookService {

	static apiUrl = 'http://vps821252.ovh.net:8085/todos';

	findAll() {
		return fetch(BookService.apiUrl)
			.then(res => res.json())
			.then(lo => {
				lo.forEach(o => o.dueDate = new Date(o.dueDate));
				return lo;
            });
	}

	findById(id) {
		return fetch(BookService.apiUrl + '/' + id)
			.then(res => res.json())
			.then(o => {
				o.dueDate = new Date(o.dueDate);
				return o;
			});
	}

	save(book) {
		book.dueDate = book.dueDate.toISOString().substr(0, 10);
		return fetch(BookService.apiUrl, {
			method: 'POST',
			body: JSON.stringify(book),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	update(book) {
		book.dueDate = book.dueDate.toISOString().substr(0, 10);
		return fetch(BookService.apiUrl + '/' + book.id, {
			method: 'PUT',
			body: JSON.stringify(book),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	delete(book) {
		return this.deleteById(book.id);
	}

	deleteById(id) {
		return fetch(BookService.apiUrl + '/' + id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}

export default new BookService()