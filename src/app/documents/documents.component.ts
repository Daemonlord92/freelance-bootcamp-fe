import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
	{
		title: "testDoc1",
		description: "A test Document",
		file_url: "http://www.3jmcoding.com",
		updated_at: '10/23/19',
		image_url: 'https://www.splitshire.com/wp-content/uploads/2018/08/SplitShire-18-07913.jpg',
	},{
		title: "testDoc2",
		description: "A test Document",
		file_url: "http://www.3jmcoding.com",
		updated_at: '10/23/19',
		image_url: 'https://www.splitshire.com/wp-content/uploads/2018/08/SplitShire-18-07913.jpg',
	},{
		title: "testDoc3",
		description: "A test Document",
		file_url: "http://www.3jmcoding.com",
		updated_at: '10/23/19',
		image_url: 'https://www.splitshire.com/wp-content/uploads/2018/08/SplitShire-18-07913.jpg',
	},

	]
}
