import { Component } from '@angular/core';
import { Proposal } from './proposal';


@Component({
	selector: 'proposal-new',
	templateUrl: 'proposal-new.component.html',
	styleUrls: ['proposal.component.css']
})
export class ProposalNewComponent {
	proposal = new Proposal;
}