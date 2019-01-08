using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileManager.IServices
{
	public interface IFileService
	{
		/// <summary>
		/// Get Files
		/// </summary>
		/// <param name="path"></param>
		/// <returns></returns>
		string[] GetFilesList(string path);

		/// <summary>
		/// Opens file
		/// </summary>
		void Open(string path);

		/// <summary>
		/// delete File
		/// </summary>
		/// <param name="path"></param>
		void Delete(string path);

		/// <summary>
		/// Create
		/// </summary>
		/// <param name="path"></param>
		void Create(string path);
	}
}
