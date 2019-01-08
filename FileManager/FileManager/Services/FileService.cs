using FileManager.IServices;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Web;

namespace FileManager.Services
{
	/// <summary>
	/// File Service
	/// </summary>
	public class FileService : IFileService
	{
		/// <summary>
		/// Get files
		/// </summary>
		/// <param name="path"></param>
		/// <returns></returns>
		public string[] GetFilesList(string path)
		{
			if (!string.IsNullOrWhiteSpace(path))
			{
				return Directory.GetFiles(path);
			}
			throw new ArgumentNullException("path");
		}

		/// <summary>
		/// opens file
		/// </summary>
		/// <param name="path"></param>
		public void Open(string path)
		{
			if (string.IsNullOrWhiteSpace(path) || !File.Exists(path))
			{
				throw new ArgumentNullException("path");
			}
			Process.Start(path);
		}

		/// <summary>
		/// delete File
		/// </summary>
		/// <param name="path"></param>
		public void Delete(string path)
		{
			if(string.IsNullOrWhiteSpace(path) || !File.Exists(path))
			{
				throw new ArgumentNullException("path");
			}
			File.Delete(path);
		}

		/// <summary>
		/// Create
		/// </summary>
		/// <param name="path"></param>
		public void Create(string path)
		{
			if (string.IsNullOrWhiteSpace(path) || File.Exists(path))
			{
				throw new ArgumentNullException("path");
			}
			FileStream fs = File.Create(path);
			fs.Dispose();
		}
	}
}