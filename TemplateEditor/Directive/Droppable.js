define(["../App.js"],function(a){return a.directive("csDroppable",["Cerberus.Tool.TemplateEditor.Helper.TemplateEditor",function(a){return{restrict:"A",scope:!1,link:function(b,c){a.EnableDrop(b,c.find(".template"))}}}])});