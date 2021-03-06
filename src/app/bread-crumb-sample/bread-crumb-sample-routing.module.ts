import { BreadCrumb } from "./../core/bread-crumb/bread-crumb";
import { Parent1Child1Child1Component } from "./parent1-child1-child1/parent1-child1-child1.component";
import { Parent1Child1Component } from "./parent1-child1/parent1-child1.component";
import { Parent1Component } from "./parent1/parent1.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "breadCrumbTest",
    data: {
      breadcrumb: { label: "Parent1", glyphIcon: "glyphicon glyphicon-link" } as BreadCrumb,
      title: "Parent1 Title",
      metaTags: {
        description: "Page Description or some content here",
        keywords: "some, keywords, here, separated, by, a comma"
      }
    },
    children: [
      {
        path: "", component: Parent1Component
      },
      {
        path: "Parent1Child1",
        data: {
          breadcrumb: { label: "Parent1-Child1", glyphIcon: "glyphicon glyphicon-envelope" } as BreadCrumb,
          title: "Parent1-Child1 Title",
          metaTags: {
            description: "Page Description or some content here",
            keywords: "some, keywords, here, separated, by, a comma"
          }
        },
        children: [
          {
            path: "", component: Parent1Child1Component
          },
          {
            path: "Parent1Child1Child1", component: Parent1Child1Child1Component,
            data: {
              breadcrumb: { label: "Parent1-Child1 Child1", glyphIcon: "glyphicon glyphicon-pencil" } as BreadCrumb,
              title: "Parent1-Child1 Child1",
              metaTags: {
                description: "Page Description or some content here",
                keywords: "some, keywords, here, separated, by, a comma"
              }
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadCrumbSampleRoutingModule { }
