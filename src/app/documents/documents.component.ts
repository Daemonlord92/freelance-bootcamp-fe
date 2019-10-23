import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	documents: Document[] = [
	{
		title: "testDoc1",
		description: "A test Document",
		file_url: "http://www.3jmcoding.com",
		updated_at: '10/23/19',
		image_url: 'http://www.3jmcoding.com',
	},{
		title: "testDoc2",
		description: "A test Document",
		file_url: "http://www.3jmcoding.com",
		updated_at: '10/23/19',
		image_url: 'http://www.3jmcoding.com',
	},{
		title: "testDoc3",
		description: "A test Document",
		file_url: "http://www.3jmcoding.com",
		updated_at: '10/23/19',
		image_url: 'http://www.3jmcoding.com',
	},

	]
}
