import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {
  panelOpenState = false;

  faq = [
    {
      question: 'What is SEAL?',
      answear: 'https://ub.ac.id/id/'
    },
    {
      question: 'What is the connection between AWS and SEAL?',
      answear: 'https://ub.ac.id/id/'
    },
    {
      question: 'Is SEAL part of Singhasari SEZ?',
      answear: 'https://ub.ac.id/id/'
    },
    {
      question: 'What are the things that are organized by SEAL?',
      answear: 'https://ub.ac.id/id/'
    },
    {
      question: 'How can we collaborate or partner with SEAL?',
      answear: 'https://ub.ac.id/id/'
    },
    {
      question: 'Is SEAL part of Singhasari SEZ?',
      answear: 'https://ub.ac.id/id/'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
