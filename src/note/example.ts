/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-21 16:50:39
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-03-21 20:47:50
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

// 

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