/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-21 16:50:39
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-03-27 21:52:30
 */

function ExpensiveWebCall(time: number): Promise<void> {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

class MyWebService {
  async CallExpensiveWebOperation() {
    try {
      await ExpensiveWebCall(4000);
      console.log(`Finished web service`)
    } catch (error) {
      console.log(`Caught ${error}`);
    }
  }
}

// 创建一个枚举
enum TagType {
  Paragraph,
  Header1,
  Header2,
  Header3,
  HorizontalRule
}

// 处理映射
class TagTypeToHtml {
  private readonly tagType: Map<TagType, string> = new Map<TagType, string>();
  constructor() {
    this.tagType.set(TagType.Header1, 'h1');
    this.tagType.set(TagType.Header2, 'h2');
    this.tagType.set(TagType.Header3, 'h3');
    this.tagType.set(TagType.Paragraph, 'p');
    this.tagType.set(TagType.HorizontalRule, 'hr');
  }
  public OpeningTag(tagType: TagType): string {
    return this.GetTag(tagType, `<`);
  }

  public ClosingTag(tagType: TagType): string {
    return this.GetTag(tagType, `</`);
  }

  private GetTag(tagType: TagType, openingTagPattern: string): string {
    let tag = this.tagType.get(tagType);
    if(tag !== null) {
      return `${openingTagPattern}${tag}>`;
    }
    return `${openingTagPattern}p>`;
  }
}

// 定义接口
interface IMarkdownDocument {
  Add(...content: string[]): void;
  Get(): string;
}

class MarkdownDocument implements IMarkdownDocument {
  private content : string = "";
  Add(...content: string[]): void {
    content.forEach(element => {
      this.content += element;
    });
  }
  Get(): string {
    return this.content
  }
}

// class Markdown {
//   public ToHtml(text: string): string {
//     let document : IMarkdownDocument = new MarkdownDocument();
//     let header1: Header1ChainHandler = new ChainOfResponsibilityFactory().Build(document);
//     let lines : string[] = text.split('\n');
//     for(let index = 0; index < lines.length; index++) {
//       let parseElement : ParseElement = new ParseElement();
//       parseElement.CurrentLine = lines[index];
//       header1.HandleRequest(parseElement);
//     }
//     return document.Get();
//   }
// }

class HtmlHandler {
  public TextChangeHandler(id: string, output: string): void {
    let markdown = <HTMLTextAreaElement>document.getElementById(id);
    let markdownOutput = <HTMLTextAreaElement>document.getElementById(output);
    if(markdown !== null) {
      markdown.onkeyup = (e) => {
        if(markdown.value) {
          markdownOutput.innerHTML = markdown.value;
        } else {
          markdownOutput.innerHTML = '<p></p>'
        }
      }
    }
  }
}

// 责任链模式
abstract class Handler<T> {
  protected next: Handler<T> | null = null;
  public SetNext (next: Handler<T>): void {
    this.next = next;
  }
  public HandleRequest(request: T): void {
    if(!this.CanHandle(request)) {
      if(this.next !== null) {
        this.next.HandleRequest(request);
      }
      return;
    }
  }
  protected abstract CanHandle(request: T): boolean;
}

// class ParseChainHandler extends Handler<ParseElement> {
//   private readonly visitable: IVisitable = new this.visitable();
//   constructor(private readonly document : IMarkdownDocument, private readonly tagType: string, private readonly visitor: IVisitor) {
//     super()
//   }
// }

class LineParser {
  public Parse(value: string, tag: string): [boolean, string] {
    let output : [boolean, string] = [false, ""];
    output[1] = value;
    if(value === '') {
      return output;
    }
    let split = value.startsWith(`${tag}`);
    if(split) {
      output[0] = true;
      output[1] = value.substring{tag.length}
    }
    return output;
  }
}